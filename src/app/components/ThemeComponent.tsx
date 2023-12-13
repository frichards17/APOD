'use client'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#050924'
        },
        secondary: {
            main: '#7DCFB6'
        },
      mode: 'dark',
    },
  });

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <ThemeProvider theme={darkTheme}>
            {children}
        </ThemeProvider>
    )
  }