import React from 'react'
import MobileNavLink from './MobileNavLink'

interface MenuOverlayProps {
  links: {
    href: string
    title: string
  }[]
}

const MenuOverlay = (props: MenuOverlayProps) => {
  return (
    <ul className='flex md:hidden flex-col py-4 items-center'>
      {props.links.map((link, index) => (
        <li key={index}>
          <MobileNavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay
