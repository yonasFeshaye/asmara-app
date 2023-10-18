import React from 'react'
import Link from 'next/link'
import {GiCamel} from 'react-icons/Gi'


const Navbar = () => {
    const links = [
        {label: 'Dashboard', href:'/'},
        {label: 'Issues', href:'/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><GiCamel /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <Link 
                key={link.href} 
                href={link.href} 
                className='text-zinc-400 hover:text-zinc-900     transition-colors'>
                    {link.label}
            </Link>
                )}                   
        </ul>
    </nav>
  )
}

export default Navbar