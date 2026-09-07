import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import type { ChatMessage } from "@/routes/flows/chat/screens/chat/chat.types"
import { createPost, getPosts, MESSAGE_CATEGORY, type Post } from "@/services/api/posts"

const toMessages = (posts: Post[]): ChatMessage[] =>
  posts.map((post) => ({
    id: String(post.id),
    text: post.body,
    createdAt: post.createdAt,
    isMine: post.category === MESSAGE_CATEGORY,
  }))

const postsKey = (userId: string) => ["posts", userId] as const

export const usePosts = (userId: string) => {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: postsKey(userId),
    queryFn: () => getPosts(userId),
    enabled: Boolean(userId),
    // Keep sent messages in the cache instead of refetching them away on mount.
    staleTime: Infinity,
    select: toMessages,
  })

  return {
    messages: data ?? [],
    isPending,
    isError,
    refetch,
  }
}

// Demo hack: the mock server does not return a real id for created posts (it
// returns id 101 for every one), so we invent our own random negative ids
// and keep them even after the server answers. Remove once the API is real.
const randomOptimisticId = () => -Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)

const buildOptimisticPost = (userId: string, text: string): Post => ({
  id: randomOptimisticId(),
  userId: Number(userId),
  title: text,
  body: text,
  tags: [],
  category: MESSAGE_CATEGORY,
  createdAt: new Date().toISOString(),
})

export const useCreatePost = (userId: string) => {
  const queryClient = useQueryClient()
  const queryKey = postsKey(userId)

  const appendToCache = (post: Post) => {
    queryClient.setQueryData<Post[]>(queryKey, (old) => [...(old ?? []), post])
  }

  const replaceInCache = (id: number, update: (post: Post) => Post) => {
    queryClient.setQueryData<Post[]>(queryKey, (old) =>
      (old ?? []).map((post) => (post.id === id ? update(post) : post)),
    )
  }

  return useMutation({
    mutationFn: (text: string) => createPost(userId, text),
    onMutate: async (text) => {
      // Cancel refetches so they can't overwrite the optimistic post we add below.
      await queryClient.cancelQueries({ queryKey })
      // Snapshot the cache so onError can roll back to it.
      const previous = queryClient.getQueryData<Post[]>(queryKey)
      // Append right away so the bubble renders instantly, before the server answers.
      const optimisticPost = buildOptimisticPost(userId, text)
      appendToCache(optimisticPost)
      return { previous, optimisticId: optimisticPost.id }
    },
    onError: (_error, _text, context) => {
      // Restore the snapshot so a failed send disappears from the chat.
      if (context?.previous) {
        queryClient.setQueryData(queryKey, context.previous)
      }
    },
    onSuccess: (created, _text, context) => {
      // Demo hack: the server response has no usable id or category, so we merge
      // it but force our own id and the "message" category back on. Otherwise
      // duplicate ids break the list and the bubble jumps to the wrong side.
      replaceInCache(context.optimisticId, (post) => ({
        ...post,
        ...created,
        id: post.id,
        category: MESSAGE_CATEGORY,
      }))
    },
  })
}
