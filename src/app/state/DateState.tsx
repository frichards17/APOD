import dayjs, { Dayjs } from 'dayjs'
import { create } from 'zustand'

interface DateState {
    date: Dayjs | null,
    setDate: (date: Dayjs | null) => void
}

export const useDateStore = create<DateState>()((set) => ({
    date: dayjs(),
    setDate: (date: Dayjs | null) => set({date})
}))