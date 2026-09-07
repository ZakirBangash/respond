import { create } from "zustand"

const initialState = {
  blockedUsers: [] as string[],
}

interface BlockedUsersState {
  blockedUsers: string[]
  actions: {
    setBlocked: (userId: string, blocked: boolean) => void
  }
}

export const useBlockedUsersStore = create<BlockedUsersState>()((set) => ({
  ...initialState,

  actions: {
    setBlocked: (userId, blocked) =>
      set((state) => {
        if (blocked) {
          if (state.blockedUsers.includes(userId)) return {}
          return { blockedUsers: [...state.blockedUsers, userId] }
        }

        return {
          blockedUsers: state.blockedUsers.filter((id) => id !== userId),
        }
      }),
  },
}))
