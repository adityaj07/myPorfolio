import { FC, Suspense } from 'react'
import React from 'react';
import Image from 'next/image';
import Breadcrumbs from '../components/BreadCrumbs';
import { ImageSkeleton } from '../components/ui/Skeletons';

const locations = [
  {
    image: '/mahakal.jpeg',
    alt: 'Mahakal',
    location: 'Mahakaleshwar Temple, Ujjain',
  },
  {
    image: '/omkar.jpeg',
    alt: 'Omkar',
    location: 'Omkareshwar Temple, Madhya Pradesh',
  },
  {
    image: '/dakor.jpeg',
    alt: 'Dakor',
    location: 'Dakor, Gujarat',
  },
  {
    image: '/bangalore.jpeg',
    alt: 'Bangalore',
    location: 'Bangalore, Karnataka',
  },
  {
    image: '/sadri.jpeg',
    alt: 'Sadri',
    location: 'Sadri, Rajasthan',
  },
  {
    image: '/narlai.jpeg',
    alt: 'Narlai',
    location: 'Narlai, Rajasthan',
  },
  {
    image: '/rajBus.jpeg',
    alt: 'Raj Bus',
    location: 'Sadri, Rajasthan',
  },
  {
    image: '/ujjainsunset.jpeg',
    alt: 'Ujjain Sunset',
    location: 'Ujjain, Madhya Pradesh',
  },
  {
    image: '/khajrana.jpeg',
    alt: 'khajrana',
    location: 'Khajrana(Indore), Madhya Pradesh',
  },
  {
    image: '/statue of unity.jpeg',
    alt: 'statue of unity',
    location: 'Statue of Unity, Gujarat',
  },
  {
    image: '/charbhujatemple.jpeg' ,
    alt: 'charbhujatemple',
    location: 'Charbhuja Temple(Narlai), Rajasthan',
  },
];


const page: FC = () => {
  return (
    <div className=' w-[90%] lg:w-[60%] lg:p-12 mx-auto'>
      <div className='mt-10 md:mt-0'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          {
            label: 'Gallery',
            href: '/gallery',
            active: true,
          },
        ]}
      />
      </div>
     

    <h1 className='text-2xl mb-4 md:mb-6 text-white font-semibold md:text-3xl relative border-b border-zinc-600/40 pb-4 inline-flex gap-1 items-center tracking-tighter text-[clamp(2.5rem,5vw,3rem)] leading-none w-full'>Pictures from my recent trips</h1>
    <div className="columns-1xs md:columns-2xs lg:columns-3xs gap-4 mb-32 md:mb-0 ">
      {locations.map((location, index) => (
        <div key={index} className="flex flex-col gap-4 ">
          <Suspense fallback={<ImageSkeleton/>}>
          <div className='bg-[#1C1D1D] pb-2 m-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <Image
            src={location.image}
            alt={location.alt}
            width={800}
            height={800}
            className='object-cover aspect-auto mb-4 rounded-xl h-auto max-w-full'
          />

          <p className="mb-2 -mt-2 p-2">
          📍
            <span>{location.location}</span>
          </p>
          </div>
          </Suspense>
          
          
        </div>
      ))}
    </div>
    </div>
  );
}

export default page