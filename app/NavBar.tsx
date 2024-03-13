'use client'
import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'

const NavBar = () => {

  const currentPath = usePathname();

  const links = [
    {label:'Dashboard', href:'/'},
    {label:'Issues', href:'/issues'},
  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <Link 
            key = {link.href} 
            className={classnames({
                'text-gray-500':link.href===currentPath,
                'text-gray-50':link.href!==currentPath,
                'hover:text-gray-400 transition-colors':link.href!==currentPath,
            })} 
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
    
  )
}

export default NavBar