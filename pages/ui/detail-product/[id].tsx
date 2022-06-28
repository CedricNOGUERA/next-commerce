import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import create from 'zustand'
import { GetServerSideProps } from 'next'



const DetailProduct = ({ blog }: any) => {

  const {slug, name, price, devise, description} = blog

  const [qtyArticle, setQtyArticle] = React.useState<any>(1)
  const [isAddItem, setIsAddItem] = React.useState<boolean>(true);
  const router: any = useRouter()


  // const saveCart = localStorage.getItem('cart');
  
  // const  [cart, setCart] = React.useState<any>(saveCart ? JSON.parse(saveCart) : []);
  const  [cart, setCart] = React.useState<any>([]);
  const  [panier, setPanier] = React.useState<any>([]);



 

  // React.useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart]);


  const { id } = router.query
  if (!router.isFallback && !blog?.id) {
    return 'error 404'
  }


const addToCart = (name: any, price: any, qty: any, slug: any, setCart: any) => {
  const currentProdAdded = cart.find((prod: any) => prod.name === name)
console.log(currentProdAdded)
  if(currentProdAdded) {
    const cartFilteredCurrentProd = cart.filter((prod: any) => prod.name !== name)
    console.log(name)
    setCart([
      ...cartFilteredCurrentProd,
      {name, price, slug, amount: currentProdAdded.amount = qty}
    ])

  }else{
    setCart([...cart, {name, price, slug, amount: qty}])

console.log(cart)

}

}
console.log(cart)

  const subtrQty = () => {
    if (qtyArticle > 1) {
      setQtyArticle(qtyArticle - 1)
    }
  }
  const addQty = () => {
    setQtyArticle(qtyArticle + 1)
  }


  return (
    <Container fluid className='px-0'>
      <Container fluid className='text-center py-5'>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <Container>
              <Row>
                <Col xs={12} md={7} lg={8} className='m-auto'>
                  <Card className='text-start h-100 border-0'>
                    <Card.Img variant='top' src={slug} />
                  </Card>
                </Col>
                <Col xs={12} md={5} lg={4} className=''>
                  <Card className='border-0 text-start m-auto'>
                    <Card.Body className=''>
                      <Card.Title>
                        <h1>{name}</h1>
                      </Card.Title>
                      <hr />
                      <Card.Title>
                        {price} {devise}
                      </Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                    <div className='px-3 py-4' onClick={() => addToCart(name, price, qtyArticle, slug, setCart)}>
                        <div className='btn btn-sm btn-outline-dark rounded-pill'>
                          Ajouter au panier
                        </div>
                    </div>
                    
                    
                    <Col xs={12} md={12} lg={8} xl={6}>
                      <InputGroup className='mb-3'>
                        <InputGroup.Text onClick={subtrQty}>-</InputGroup.Text>
                        <Form.Control
                          aria-label='Amount (to the nearest dollar)'
                          placeholder='1'
                          className='text-center'
                          value={qtyArticle}
                          onChange={(e) => setQtyArticle(e.currentTarget.value)}
                        />
                        <InputGroup.Text onClick={addQty}>+</InputGroup.Text>
                      </InputGroup>
                    </Col>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </Container>
    </Container>
  )
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://62a28042cd2e8da9b008d372.mockapi.io/productData/${params.id}`
  )
  const data = await res.json()

  return {
    props: {
      blog: {
        ...data,
      },
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(`https://62a28042cd2e8da9b008d372.mockapi.io/productData`)
  const data = await res.json()

  return {
    paths: data.map((blog: any) => {
      return {
        params: {
          id: blog.id,
        },
      }
    }),
    fallback: false,
  }
}






export default DetailProduct
