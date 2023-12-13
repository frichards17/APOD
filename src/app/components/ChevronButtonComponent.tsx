'use client'
import { IconButton } from '@mui/material'
import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDateStore } from '../state/DateState';
import { Direction } from "../enum/Direction"
import { useRouter, useSearchParams } from 'next/navigation';
import dayjs, { Dayjs } from 'dayjs';
import { useLoadingStore } from '../state/LoadingState';

const ChevronButtonComponent = (
    {
        direction,
        disabled
    }: {
        direction: Direction,
        disabled: boolean
    }
    ) => {

    const {setDate} = useDateStore()
    const {setLoading} = useLoadingStore()
    const currentDate = dayjs(useSearchParams().get('date'))
    const router = useRouter()

    if(direction == Direction.backwards){
        return (
            <IconButton 
                size="large"
                disabled={disabled}
                onClick={() => {

                        const newDate = currentDate.subtract(1, 'day')
                        setDate(newDate)
                        setLoading(true)
                        router.push(`/?date=${newDate?.format('YYYY-MM-DD')}`)
                    
                }}
            >
                <ChevronLeftIcon fontSize="inherit" />
            </IconButton>
        )
    }else if(direction == Direction.forwards){
        return (
            <IconButton 
                size="large"
                disabled={disabled}
                onClick={() => {
                        const newDate = currentDate.add(1, 'day')
                        setDate(newDate)
                        setLoading(true)
                        router.push(`/?date=${newDate?.format('YYYY-MM-DD')}`)
                }}
            >
                <ChevronRightIcon fontSize="inherit" />
            </IconButton>
        )
    }
}

export default ChevronButtonComponent