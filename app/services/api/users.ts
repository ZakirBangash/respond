import { api } from "@/services/api"

export const USERS_PAGE_SIZE = 10

export type User = {
  id: number
  name: string
  username: string
  email: string
  avatar: string
  phone: string
  website: string
  address: {
    street: string
    city: string
    zipcode: string
  }
}

export type GetUsersResponse = {
  total: number
  limit: number
  offset: number
  results: User[]
}

export const getUsers = async (offset: number) => {
  const { data } = await api.get<GetUsersResponse>("api/users", {
    params: { limit: USERS_PAGE_SIZE, offset },
  })
  return data
}

export const getUser = async (userId: string) => {
  const { data } = await api.get<User>(`api/users/${userId}`)
  return data
}
