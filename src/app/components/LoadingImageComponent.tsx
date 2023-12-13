'use client'
import React from 'react'
import { Oval } from 'react-loader-spinner'
import { useLoadingStore } from '../state/LoadingState'
import Image from 'next/image'

interface Props {
    src: string,
    alt: string,
    onClick: () => void,
    className: string,
    objectFit: string
}

const LoadingImageComponent = ({
    src,
    alt,
    onClick,
    className,
    objectFit
}: Props
) => {
    const { loading, setLoading } = useLoadingStore()

    return (
        <div className={loading ? 'w-full h-full py-8' : className}>
            <Oval
                color={'#ffffff'}
                secondaryColor={'##A0A9BA'}
                width={'2rem'}
                height={'2rem'}
                wrapperStyle={{ 'display': loading ? 'flex' : 'none', 'alignItems': 'center', 'justifyContent': 'center', 'height': '100%' }}
            />
            <Image
                src={src}
                alt={alt}
                className={loading ? 'hidden' : 'w-full h-full ' + objectFit}
                onClick={onClick}
                onLoad={() => setTimeout(() => setLoading(false), 150)}
                priority
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    )
}

export default LoadingImageComponent