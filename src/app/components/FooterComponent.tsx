import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const GitHubLink = () => {
  return (
    <a
      className='flex flex-row items-center text-inherit decoration-none no-underline ml-2'
      href='https://github.com/frichards17'
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon fontSize='small' />
      <p className='ml-2'>frichards17</p>
      <div className='text-xs'>
        <ArrowOutwardIcon fontSize='inherit' />
      </div>
    </a>
  )
}

const NASALink = () => {
  return (
    <a
      className='flex flex-row items-center text-inherit decoration-none no-underline ml-2'
      href='https://api.nasa.gov/'
      target="_blank"
      rel="noopener noreferrer"
    >
      <RocketLaunchIcon fontSize='small' />
      <p className='ml-2'>NASA APIs</p>
      <div className='text-xs'>
        <ArrowOutwardIcon fontSize='inherit' />
      </div>
    </a>
  )
}

const FooterComponent = ({
  copyright,
  mediaType
}: {
  copyright: string,
  mediaType: string
}) => {
  return (
    <div className='w-full px-4 flex flex-col -space-y-4 items-center lg:flex-row lg:space-y-0 lg:justify-between lg:items-start text-primary-200'>
      <p className={mediaType=='image' && copyright != "" ? '': 'opacity-0'}>{'Image Credit and Copyright: '}<span className='font-bold'>{copyright}</span></p>
      <div className='flex flex-col -space-y-4'>
        <NASALink />
        <GitHubLink />
      </div>

    </div>
  )
}

export default FooterComponent