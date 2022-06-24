import type { GetServerSideProps, NextPage } from 'next'
import { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardItem from '../components/Ui/CardItem'

const Shop: FC = ({data}: any) => {
  return (
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
