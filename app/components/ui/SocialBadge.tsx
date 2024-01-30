import { cn } from '@/app/utils/cn'
import Link from 'next/link'
import { FC, ReactNode } from 'react'


interface SocialBadgeProps {
  name: string,
  icon: ReactNode,
  link: string,
  className?: string
}



const SocialBadge: FC<SocialBadgeProps> = ({name, icon, link, className}) => {
  return (
    <Link href={link} target='_blank' className={cn('flex justify-center items-center gap-2 rounded-md px-3 py-1 bg-[#333333] hover:bg-white transition-colors duration-150 text-white hover:text-black shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-fit', className)}>
        {icon}
        <span>{name}</span>
    </Link>
  
    )
}

export default SocialBadge