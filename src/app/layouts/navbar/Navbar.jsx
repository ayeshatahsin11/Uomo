import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import navbarData from '@/app/data/navbarData'

const Navbar = () => {
  return (
   <header>
    <nav>
      <Container>
   <div className='flex items-center gap-14 justify-between mt-7.5 mb-5'>
     <Logo/>
    <ul className='flex gap-11.25'>
  {navbarData?.navlist?.map((item, index) => (
    <li key={index}>
      <a  className=" font-jost font-medium text-primary inline-block text-[14px] relative leading-6
    after:content-['']
    after:absolute after:left-0 after:bottom-[-4px]
    after:h-0.5 after:w-full after:bg-primary
    after:scale-x-0 after:origin-left
    after:transition-transform after:duration-300
    hover:after:scale-x-100  "
        href={item?.url}>
        {item.title}
      </a>
    </li>
  ))}
</ul>

<ul className='flex gap-8'>
  {navbarData?.icons?.map((item, index) => (
    <li key={index}>
    <button className='cursor-pointer'>{item?.icon}</button>
    </li>
  ))}
</ul>
 

   </div>
   </Container>
    </nav>
   </header>
  )
}

export default Navbar

