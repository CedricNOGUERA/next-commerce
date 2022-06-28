import Link from 'next/link'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Logo from '../../Ui/Logo'
import NavLinks from '../../Ui/NavLinks'

type Props = {
  title: string;
  url: string;
  
  }

const Header = ({url, title}: Props) => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Logo url={url} title={title} />
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <NavLinks />
        </Container>
      </Navbar>
    </>
  )
}

export default Header
