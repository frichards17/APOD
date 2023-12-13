'use client'
import { IconButton } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import { useDateStore } from '../state/DateState'
import { useLoadingStore } from '../state/LoadingState'

const HomeButtonComponent = () => {
    const router = useRouter()
    const { setDate } = useDateStore()
    const { setLoading } = useLoadingStore()

  return (
    <IconButton
      onClick={() => {
        let today = dayjs()
        setDate(today)
        setLoading(true)
        router.push(`/?date=${today.format('YYYY-MM-DD')}`)
      }}
    >
      <HomeIcon />
    </IconButton>
  )
}

export default HomeButtonComponent