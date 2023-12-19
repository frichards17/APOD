import dayjs, { Dayjs } from 'dayjs'
import { create } from 'zustand'

interface LoadingState {
    loading: boolean,
    setLoading: (date: boolean) => void
}

export const useFullscreenLoadingStore = create<LoadingState>()((set) => ({
    loading: true,
    setLoading: (loading: boolean) => set({loading})
}))