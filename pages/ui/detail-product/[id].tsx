import React from 'react'
import { Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

import { useRouter } from 'next/router'
import Link from 'next/link'

const DetailProduct = ({ blog }: any) => {
  const [qtyArticle, setQtyArticle] = React.useState<any>(1)

  const router: any = useRouter()
  const { id } = router.query
  if (!router.isFallback && !blog?.id) {
    return 'error 404'
  }

  const subtrQty = () => {
    if (qtyArticle > 1) {
      setQtyArticle(qtyArticle - 1)
    }
  }
  const addQty = () => {
    setQtyArticle(qtyArticle + 1)
  }
  console.log(qtyArticle)
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
                    <Card.Img variant='top' src={blog.slug} />
                  </Card>
                </Col>
                <Col xs={12} md={5} lg={4} className=''>
                  <Card className='border-0 text-start m-auto'>
                    <Card.Body className=''>
                      <Card.Title>
                        <h1>{blog.name}</h1>
                      </Card.Title>
                      <hr />
                      <Card.Title>
                        {blog.price} {blog.devise}
                      </Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                    <div className='px-3 py-4'>
                      <Link href={`/ui/detail-product/${id}`}>
                        <a className='btn btn-sm btn-outline-dark rounded-pill'>
                          Ajouter au panier
                        </a>
                      </Link>
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
