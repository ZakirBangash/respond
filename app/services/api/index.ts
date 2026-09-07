/**
 * Shared axios client. Paths are relative to Config.API_URL.
 *
 *   import { api } from "@/services/api"
 *
 *   const { data } = await api.get("/users")
 *   const { data } = await api.post("/users", { name: "Ada" })
 */
import axios from "axios"

import Config from "@/config"

export const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
  },
})
