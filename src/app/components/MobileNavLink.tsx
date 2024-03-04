import Link from 'next/link'

interface NavLinkProps {
  href: string
  title: string
}

const MobileNavLink = (props: NavLinkProps) => {
  return (
    <Link
      href={props.href}
      className='block py-4 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-[#8c2724]'
    >
      {props.title}
    </Link>
  )
}

export default MobileNavLink
