import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardItem from '../CardItem'

type Props = {
    titleList: string;
    data: any;
    limitList: number;
}


const ProductList = ({titleList, data, limitList} :Props) => {



    return (
      <Container className='py-5'>
        <div className='text-center'>
          <h3 className='pb-5'>{titleList}</h3>
        </div>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {data.slice(0, limitList).map((prod: any) => (
            <>
              <Col>
                <CardItem props={prod} />
              </Col>
            </>
          ))}
        </Row>
      </Container>
    )
}

export default ProductList
