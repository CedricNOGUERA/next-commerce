import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { Navbar } from 'react-bootstrap'


type Props = {
title: string;
url: string;

}

const Logo = ({url, title}: Props) => {
  return (
    <Navbar.Brand>
    {' '}
    <Link href='/'>
      <a className='text-decoration-none text-secondary'>
      <img src={url} alt={title}/>
      {/* <Image
              src={url}
              width={100}
              height={100}
              alt={title}
              blurDataURL='https://picsum.photos/640/480'
              placeholder="blur" /> */}
      {' '}
        {title}
        </a>
    </Link>
  </Navbar.Brand>
  )
}
// "https://img.icons8.com/stickers/2x/online-shop.png"
export default Logo
