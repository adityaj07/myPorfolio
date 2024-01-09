import { FC } from 'react'
import Breadcrumbs from '../components/BreadCrumbs'
import AboutMe from '../components/ui/AboutMe'
import TechStack from '../components/ui/TechStack'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className=' w-[80%] lg:w-[60%] lg:p-12 mx-auto'>
      <div className='mt-10 md:mt-0'>
       <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          {
            label: 'About',
            href: '/about',
            active: true,
          },
        ]}
      />
      </div>
     

    <h1 className='text-2xl mb-4 md:mb-6  font-semibold md:text-3xl relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 border-b border-zinc-400 pb-4'>About</h1>
    <AboutMe/>

    <h2 className='text-2xl mt-12 mb-4 md:mb-6  font-semibold md:text-3xl relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 border-b border-zinc-400 pb-4'>My Tech Stack</h2>
    <TechStack />
    </div>
  )
}

export default page