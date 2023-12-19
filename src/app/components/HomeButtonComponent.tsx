'use client'
import { IconButton } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'

const HomeButtonComponent = () => {
  return (
    <Link href='/'>
    <IconButton>
      <HomeIcon />
    </IconButton>
    </Link>
  )
}

export default HomeButtonComponent