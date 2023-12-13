import './globals.css'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import ThemeComponent from './components/ThemeComponent'
import TopBarComponent from './components/TopBarComponent'
import DateButtonComponent from './components/DateButtonComponent'
import { Inter } from 'next/font/google'
import HomeButtonComponent from './components/HomeButtonComponent'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>APOD - Astronomy Picture of the Day</title>
      </head>
      <body className={inter.className} id='app'>
        <ThemeComponent>
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <main className="bg-gradient-to-b from-primary from-60% to-primary-950 min-h-screen flex flex-col items-center">
              <TopBarComponent title={"NASA Picture of the Day"} >
                <div className='flex flex-row'>
                  <DateButtonComponent />
                  <HomeButtonComponent />
                </div>
              </TopBarComponent>
              
                {children}

            </main>
          </StyledEngineProvider>
        </ThemeComponent>
      </body>
    </html>
  )
}
