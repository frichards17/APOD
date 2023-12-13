'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    title: string
}

const TopBarComponent = ({ children}: React.PropsWithChildren<Props>) => {

    return (
        <div className='w-full flex flex-col items-center border-primary-800 shadow-outer shadow-primary-950 px-8'>
            <div className='w-full md:w-9/12 flex flex-row justify-between items-center py-2 pe-4'>
                {/* <h1 className="text-base md:text-lg lg:text-xl font-mono text-accent pe-4">{title}</h1> */}
                <div className='relative h-12 w-36'>
                    <Link href='/'>
                    <Image
                        src={"/logo.png"}
                        alt='logo' 
                        className='object-contain cursor-pointer'
                        width={144}
                        height={48}
                    />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    )
}

export default TopBarComponent