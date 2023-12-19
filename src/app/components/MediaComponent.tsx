'use client'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import LoadingImageComponent from './LoadingImageComponent';
import { useLoadingStore } from '../state/LoadingState';
import { useFullscreenLoadingStore } from '../state/FullscreenLoadingState';

type Props = {
    src: string,
    hdsrc: string,
    alt: string,
    media_type: string
}

const MediaComponent = ({
    src,
    hdsrc,
    alt,
    media_type
}: Props) => {

    const {setLoading} = useFullscreenLoadingStore()
    const [fullscreen, setFullscreen] = React.useState(false);

    if (media_type == 'image') {
        return (
            <div id='mediacomp' className='max-w-full min-w-[50%] xl:max-w-[65%] max-h-full min-h-[50%] grow'>
                <LoadingImageComponent
                    src={src}
                    alt={alt}
                    onClick={() => {
                        setFullscreen(true);
                    } }
                    className='w-full h-full relative'
                    objectFit='object-cover' 
                    useLoadingStore={useLoadingStore}
                />
                <div className={`${fullscreen ? 'fixed' : 'hidden'} w-screen h-screen z-10 top-0 left-0 p-4 backdrop-blur-sm`}>
                            <LoadingImageComponent
                                src={hdsrc}
                                alt={"fullscreen"}
                                onClick={()=>{}}
                                className='h-full w-full relative'
                                objectFit='object-contain'
                                useLoadingStore={useFullscreenLoadingStore}
                            />
                    <IconButton
                        size='large'
                        className='absolute top-2 right-2'
                        onClick={() => setFullscreen(false)}
                    >
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                </div>
            </div>
        )


    } else if (media_type == 'video') {
        return (
            <iframe
                src={src}
                className='object-contain w-full aspect-video grow border-0'
            />
        )
    }
}

export default MediaComponent