import Link from 'next/link'
import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavLinks = () => {
  return (
    <Navbar.Collapse id='basic-navbar-nav'>
    <Navbar.Text className='ms-auto'>
      <Link href='/profile'>
        <a className='text-decoration-none text-secondary me-4'>Profile</a>
      </Link>
      <Link href='/shop'>
        <a className='text-decoration-none text-secondary me-4'>Shop</a>
      </Link>
      <Link href='/cart'>
        <a className='text-decoration-none text-secondary'>Cart</a>
      </Link>
    </Navbar.Text>
  </Navbar.Collapse>
  )
}

export default NavLinks
