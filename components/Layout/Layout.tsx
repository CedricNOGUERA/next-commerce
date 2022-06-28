import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
    children: ReactNode;
    // title: string;
    // url: string;
}

const Layout = ({children}: Props) => {
    const url = "https://img.icons8.com/stickers/2x/online-shop.png"
    const title = "Next shop"


  return (
<>
    <Header url={url} title={title}/>
    {children}
    <Footer />
</>
  )
}

export default Layout
