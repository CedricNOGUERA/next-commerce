import React from 'react'
import Link from 'next/link'
import {
    ButtonGroup,
    Card,
    Col,
    Container,
    Form,
    InputGroup,
    Row,
    Table,
    ToggleButton,
  } from "react-bootstrap";
import Image from 'next/image';
import { GetServerSideProps } from 'next';

const Cart = ({data}: any) => {
    const [empty, setEmpty] = React.useState<boolean>(false);
    // const [panier, setPanier] = React.useState<any>();
    // const total = data.reduce(
	// 	(acc, plantType) => acc + plantType.amount * plantType.price,
	// 	0
	// )
// const panier = JSON.parse(localStorage.getItem("cart") || "")
//  setPanier(JSON.parse(localStorage.getItem("cart") || ""))




//  const subtrQty = () => {
//     if (qtyArticle > 1) {
//       setQtyArticle(qtyArticle - 1)
//     }
//   }
//   const addQty = () => {
//     setQtyArticle(qtyArticle + 1)
//   }









  return (
    <>
    {!empty && (
        <>
          <Container className="justify-content-between py-5">
            <Row>
              <Col>
                <h1>Your cart</h1>
              </Col>
              <Col className="d-flex justify-content-end">
                <span className="align-middle">
                  <Link href="/shop">Continue shopping</Link>
                </span>
              </Col>
            </Row>
          </Container>
          <Container className="border-bottom pb-4">
            <Table hover className="">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th></th>
                  <th></th>
                  <th>QUANTITY</th>
                  <th className="text-end">TOTAL</th>
                </tr>
              </thead>
              <tbody className="border border-white">
                {data?.map((prod: any) => (
<>
                <tr className="">

                  <td className="col-1 pt-5">
                  <Card className='text-start h-100 border-0'>
                    <Card.Img src={prod.slug} alt="icon"/>
                  </Card>
                    {/* <Image src={prod.slug} width={108} height={108} alt="icon" /> */}
                  </td>
                  <td className="col-4 ps-4 pt-5">{prod.name}</td>
                  <td className=" col-2 me-5"></td>
                  <td className="col-3 ps-4 pt-5">
                    <Row>
      
                      <Col>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>-</InputGroup.Text>
                          <Form.Control
                            aria-label="Amount (to the nearest dollar)"
                            placeholder={prod.amount}
                            className="text-center"
                          />
                          <InputGroup.Text>+</InputGroup.Text>
                        </InputGroup>
                      </Col>
                       
                      <Col>
                        <Image
                          src={`/small/20/trash--v1.png`}
                          alt="icon"
                          width={20} height={20}
                        />
                      </Col>
                    </Row>
                  </td>
                  <td className="ps-4 pt-5 text-end">$ {prod.price}</td>
                </tr>
</>

                  ))}
                
              </tbody>
            </Table>
          </Container>
          <Container className="text-end">
            <Row>
              <Col>
                <h3>Subtotal</h3>
              </Col>
              <Col xs={2}>
                <p className="mt-2">$1,145.00 CAD</p>
              </Col>
            </Row>
            <sub>Taxes and shipping calculated at checkout</sub>
            <div className="col-12 my-4">
              <ButtonGroup className="mb-2 w-25">
                <ToggleButton
                  id="toggle-buy"
                  type="radio"
                  variant="dark"
                  className="col-12"
                  value="1"
                >
                  Check out
                </ToggleButton>
              </ButtonGroup>
            </div>
          </Container>
        </>
      )}
      {empty && (
        <>
          <Container fluid className='px-0 pt-5 mt-5'>
            <Row>
              <Col xs={12} className='text-center'>
                <h1>Your cart is empty</h1>
              </Col>
              <Col className='d-flex text-center'>
                <div className='col-12 my-5 justify-content-center'>
                  <ButtonGroup className='mb-2'>
                    <ToggleButton
                      id='toggle-buy'
                      type='radio'
                      variant='dark'
                      className='col-12'
                      //   checked="false"
                      value='1'
                    >
                      <Link href='/shop'>
                        <a className='text-decoration-none text-white'>Continue shopping</a>
                      </Link>
                    </ToggleButton>
                  </ButtonGroup>
                </div>
              </Col>
              <Col xs={12} className='text-center'>
                <p>Have an account?</p>
              </Col>
              <Col xs={12} className='text-center'>
                <p>Log in to check out faster.</p>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // Fetch data from external API
    const res = await fetch(`https://62a28042cd2e8da9b008d372.mockapi.io/navBar`)
    const data = await res.json()
  console.log(data)
    // Pass data to the page via props
    return { props: { data } }
  }

export default Cart
