'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

const navLinks = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '#about',
    title: 'About',
  },

  {
    href: '/fundraising',
    title: 'Fundraising',
  },
  {
    href: '/events',
    title: 'Events',
  },
  {
    href: '/volunteer',
    title: 'Volunteer',
  },
  {
    href: '/store',
    title: 'Store',
  },
]

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false)

  return (
    <nav className='fixed top-0 right-0 left-0 z-10 bg-[#8c2724] bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2 '>
        <Image
          src='/Images/WindsorPublicSchoolsLogo.svg'
          alt='Windsor Publiuc Schools Logo'
          className='transform-translate-x-1/2 transform-translate-y-1/2 top-1/2 left-1/2'
          width={150}
          height={100}
        />
        <div className='mobile-menu block md:hidden'>
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-[#f1f1f1] text-[#f1f1f1] hover:text-white hover:border-white'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-[#f1f1f1] text-[#f1f1f1] hover:text-white hover:border-white'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar
