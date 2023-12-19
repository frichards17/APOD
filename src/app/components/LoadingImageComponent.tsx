'use client'
import React, { useRef, useEffect } from 'react'
import { Oval } from 'react-loader-spinner'
import { LoadingState } from '../state/LoadingState'
import Image from 'next/image'
import { StoreApi, UseBoundStore } from 'zustand'

interface Props {
    src: string,
    alt: string,
    onClick: (e?: React.MouseEvent<HTMLDivElement>) => void,
    className: string,
    objectFit: string,
    useLoadingStore: UseBoundStore<StoreApi<LoadingState>>
}

const LoadingImageComponent = ({
    src,
    alt,
    onClick,
    className,
    objectFit,
    useLoadingStore
}: Props
) => {
    const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>
    const { loading, setLoading } = useLoadingStore()
    useEffect(() => {
        console.log("USE EFFECT")
        if (imageRef.current.complete){
            console.log("loading complete")
            setLoading(false)
        }else{
            console.log("loading")
            setLoading(true)
        }
    }, [])

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
                className={loading ? 'hidden' : objectFit}
                onClick={onClick}
                onLoad={() => setTimeout(() => setLoading(false), 150)}
                priority
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                ref={imageRef}
            />
        </div>
    )
}

export default LoadingImageComponent