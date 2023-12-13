import React from "react";
import MediaComponent from "./components/MediaComponent";
import apod from "./type/apod";
import { redirect } from 'next/navigation'
import dayjs from "dayjs";
import ChevronButtonComponent from "./components/ChevronButtonComponent";
import { Direction } from "./enum/Direction"
import AccordionText from "./components/AccordionText";
import FooterComponent from "./components/FooterComponent";


export default async function Page({
  searchParams
}: {
  searchParams: { date: string }
}) {

  if (!searchParams.date) {
    const href = `/?date=${dayjs().format("YYYY-MM-DD")}`
    redirect(href)
  }

  const apod = await fetchAPOD(searchParams.date)
  const today = apod?.date == dayjs().format('YYYY-MM-DD')
  const firstEver = apod?.date == dayjs('1995-06-20').format('YYYY-MM-DD')
  const dateString = today ? 'Today' : dayjs(searchParams.date).format("DD/MM/YYYY")

  return (
    <div className="w-screen h-[90%] md:w-9/12 flex flex-col items-center py-4 px-8">
      <div className={`${apod?.media_type == 'video' ? 'w-full xl:w-[70%]' : 'w-full'} max-h-full min-h-[60%] rounded-lg bg-primary-800 overflow-hidden flex flex-col`}>
        <div className='w-full min-h-16 lg:h-16 shadow-outer shadow-primary flex flex-row items-center px-2'>
          <div className='hidden md:block'>
            <ChevronButtonComponent direction={Direction.backwards} disabled={firstEver} />
          </div>
          <div className='w-full h-full px-2 flex flex-row md:justify-between items-center grow'>
            <p className='text-white font-bold text-base md:text-xl lg:text-2xl'>{apod?.title}</p>
            <p className='text-primary-200 text-base md:text-xl lg:text-2xl pl-2 whitespace-nowrap hidden md:block'>{dateString}</p>
          </div>
          <div className='hidden md:block'>
            <ChevronButtonComponent direction={Direction.forwards} disabled={today} />
          </div>
        </div>
        <div id='mediacompparent' className={`object-center h-full flex items-stretch ${apod?.media_type == 'video' ? 'flex-col w-full' : 'flex-col xl:flex-row max-w-full'}`}>
          <MediaComponent
            src={apod?.url || ""}
            hdsrc={apod?.hdurl || ""}
            alt={`The image of the day for ${dayjs(searchParams.date).format('DD/MM/YYYY')}`}
            media_type={apod?.media_type || "image"}
          />
          <div className={`px-8 shrink min-w-[25%] max-w-full ${apod?.media_type == 'image' ? 'xl:max-w-[50%]' : ''} h-full overflow-auto hidden md:block`}>
            <p className='text-white text-xl font-bold'>Description</p>
            <p className='text-white -mt-2'>
              {apod?.explanation}
            </p>
          </div>
          <div className="flex flex-row justify-between md:hidden">
            <ChevronButtonComponent direction={Direction.backwards} disabled={firstEver} />
            <p className='text-primary-200 text-sm whitespace-nowrap md:hidden'>{dateString}</p>
            <ChevronButtonComponent direction={Direction.forwards} disabled={today} />
          </div>

        </div>
      </div>
      <div className='w-full mt-2 rounded-lg bg-primary-800 overflow-hidden flex flex-col md:hidden'>
        <AccordionText text={apod?.explanation || ""} />
      </div>
      <div className={apod?.media_type == 'video' ? 'w-[70%]' : 'w-full'}>
      <FooterComponent copyright={apod?.copyright || ""} mediaType={apod?.media_type || ""}/>
      </div>
    </div>

  )
}

const fetchAPOD = async (date: string) => {
  if (!date) return null;

  const key: string = process.env.NASA_API_KEY || ""

  try {
    const url = "https://api.nasa.gov/planetary/apod?" + new URLSearchParams({
      api_key: key,
      date: date || ""
    })

    const res = await fetch(url)

    if (!res.ok) return null;

    const data: apod = await res.json();

    return data;
  } catch (err) {
    console.log("ERROR")
    console.log(err)
    return null;
  }
};
