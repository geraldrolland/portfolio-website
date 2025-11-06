import { immer } from "zustand/middleware/immer"
import {create} from "zustand"

interface BearState {
  bears: number
  increase: (by: number) => void
  showNotification: boolean
}

export const useAppStore = create<BearState>()(
  immer((set) => ({
    bears: 0,
    showNotification: false,
    increase: (by: number) => set((state: BearState) => { state.bears += by }),
  }))
)