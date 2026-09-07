import { api } from "@/services/api"

export type Post = {
  id: number
  userId: number
  title: string
  body: string
  tags: string[]
  category: string
  createdAt: string
}

type GetPostsResponse = {
  total: number
  limit: number
  offset: number
  results: Post[]
}

export const getPosts = async (userId: string) => {
  const { data } = await api.get<GetPostsResponse>("api/posts", {
    params: { userId, limit: 100, offset: 0 },
  })
  return data.results
}

// Demo hack: the API has no concept of "me", so we mark posts we send with this
// category to render them on the right side. Seed posts never use it.
export const MESSAGE_CATEGORY = "message"

export const createPost = async (userId: string, text: string) => {
  const { data } = await api.post<Post>("api/posts", {
    userId: Number(userId),
    title: text,
    body: text,
    tags: [],
    category: MESSAGE_CATEGORY,
  })
  return data
}
