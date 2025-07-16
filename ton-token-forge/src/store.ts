import { create } from 'zustand'

export interface TokenInfo {
  name: string
  ticker: string
  supply: string
  masterAddress?: string
}

interface State {
  token: TokenInfo | null
  setToken: (t: TokenInfo) => void
}

export const useForgeStore = create<State>(set => ({
  token: null,
  setToken: token => set({ token }),
}))
