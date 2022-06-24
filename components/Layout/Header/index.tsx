import Link from 'next/link'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand>
            {' '}
            <Link href='/'>
              <a className='text-decoration-none text-secondary'>Next Shop</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
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
        </Container>
      </Navbar>
    </>
  )
}

export default Header
