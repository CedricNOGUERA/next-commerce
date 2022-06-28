import type { GetServerSideProps, NextPage } from 'next'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CardItem from '../components/Ui/CardItem'
import Image from 'next/image'
import pics from '../public/assets/space.jpg'
import Link from 'next/link'
import React, { useState } from 'react'
import Article from '../components/Ui/Article'
import ProductList from '../components/Ui/ProductList'

const Home: NextPage = ({data}: any) => {
  const titleArticle = "Welcome to Shop on"
  const bodyArticle = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sequi quod vero ipsa, libero eaque pariatur, aspernatur quis ducimus reprehenderit atque voluptas molestiae. Eveniet quibusdam vel blanditiis deleniti animi modi?"
  const titleList = "Discover our product"
  const [limitList, setLimitList] = React.useState<number>(3);


  return (
    <Container fluid className='px-0'>
      <Article titleArticle={titleArticle} bodyArticle={bodyArticle} />
      <ProductList  data={data} titleList={titleList} limitList={limitList} />
    </Container>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(`https://62a28042cd2e8da9b008d372.mockapi.io/productData`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
