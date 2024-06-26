import dayjs, { Dayjs } from 'dayjs'
import { create } from 'zustand'

export interface LoadingState {
    loading: boolean,
    setLoading: (date: boolean) => void
}

export const useLoadingStore = create<LoadingState>()((set) => ({
    loading: true,
    setLoading: (loading: boolean) => set({loading})
}))