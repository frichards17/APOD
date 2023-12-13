'use client'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from '@mui/material';

const AccordionText = ({
    text
}: {
    text: string
}) => {
    const [open, setOpen] = React.useState(false);

    if (open) {
        return (
            <div className='w-full flex flex-col justify-start'>
                <div className='w-full flex flex-row justify-between shadow-outer shadow-primary px-4'>
                    <p className='text-white font-bold text-base md:text-xl lg:text-2xl'>Description</p>
                    <IconButton size='large' onClick={() => setOpen(false)}>
                        <ExpandLessIcon fontSize='inherit' />
                    </IconButton>
                </div>
                <div className='-mt-2 px-4'>
                    <p className='text-white'>
                        {text}
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <div className='w-full flex flex-row justify-between px-4'>
                <p className='text-white font-bold text-base md:text-xl lg:text-2xl'>Description</p>
                <IconButton size='large' onClick={() => setOpen(true)}>
                    <ExpandMoreIcon fontSize='inherit' />
                </IconButton>
            </div>
        )
    }
}

export default AccordionText