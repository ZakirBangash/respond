/**
 * Users list and one user. Follows TanStack Query infinite queries:
 * https://tanstack.com/query/v5/docs/framework/react/guides/infinite-queries
 *
 * useUsers — first page loads with initialPageParam 0. More pages load
 * when the screen calls fetchNextPage().
 *
 * useUser — one person from api/users/:id.
 */
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

import { getUser, getUsers } from "@/services/api/users"

export const useUsers = () => {
  const {
    data,
    isPending,
    isError,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({ pageParam }) => getUsers(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextOffset = lastPage.offset + lastPage.results.length
      return nextOffset < lastPage.total ? nextOffset : undefined
    },
  })

  return {
    users: data?.pages.flatMap((page) => page.results) ?? [],
    isPending,
    isError,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  }
}

export const useUser = (userId: string) => {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUser(userId),
    enabled: Boolean(userId),
  })

  return {
    user: data,
    isPending,
    isError,
    refetch,
  }
}
