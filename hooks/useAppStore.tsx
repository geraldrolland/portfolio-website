import { create } from "zustand"

interface AppState {
  showNotification: boolean
}

export const useAppStore = create<AppState>()(() => ({
  showNotification: false,
}))
