import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CardItem from '../components/Ui/CardItem'

const Shop: FC = ({data}: any) => {
  return (
    <>
    
    <Container fluid className='px-0'>
      <Container fluid className='px-0'>
        <Container className='py-5'>
          <div className='pb-5'>
            <h1>Shop on</h1>
          </div>
          <Row xs={1} md={2} lg={4} className='g-4'>
            {data?.map((prod: any) => (
              <>
                <Col key={prod.id}>
                  <CardItem props={prod} />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </Container>
    </Container>

<Container fluid className='px-0'>
<Image src="http://loremflickr.com/640/480/planet" alt='icon' width={2202} height={960} />
<Container className='py-5'>
  <div className='text-center'>
    <h1 className='pb-5'>Shop on</h1>
    <p>Découvrez nos fabuleux articles</p>
  </div>
  <Row xs={1} md={2} lg={3} className='g-4'>
    {data.slice(0, 3).map((prod: any) => (
      <>
        <Col>
          <Link href={`/shop`}>
            <a>
              <Card style={{ width: '100%' }} className='text-start h-100'>
                <Card.Img variant='top' src={prod.slug} />
                <Card.Body>
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Text> {prod.information}</Card.Text>
                </Card.Body>
                <div className='text-end pe-3'>
                  {prod.devise} {prod.price}
                </div>
              </Card>
            </a>
          </Link>
        </Col>
      </>
    ))}
  </Row>
</Container>
</Container>
</>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(`https://62a28042cd2e8da9b008d372.mockapi.io/productData`)
  const data = await res.json()
console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}
export default Shop
