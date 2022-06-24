import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'

const CardItem = ({ props }: any) => {
  const { slug, name, information, devise, price, id } = props

  return (
    <Card style={{ width: '100%' }} className='text-start h-100'>
      <Card.Img variant='top' src={slug} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> {information}</Card.Text>
      </Card.Body>
      <div className='text-end pe-3'>
        {devise} {price}
      </div>
      <div className='px-3 py-4'>
        <Link href={`/ui/detail-product/${id}`}>
          <a className='btn btn-sm btn-outline-primary rounded-pill'>Visionner</a>
        </Link>
      </div>
    </Card>
  )
}

export default CardItem
