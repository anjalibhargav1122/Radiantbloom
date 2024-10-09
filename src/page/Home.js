import React from 'react'
import Container from 'react-bootstrap/Container';
import "./Home.css"
import daddy from "../imgs/logo.png"
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Container fluid className="bg  pt-5 pb-5 text-white">
              <Container>
              <div className='d-flex jus align-items-center'><div className='wid'><img src={daddy} className='w-100 h-100 ' /></div>
                    <div className='d-flex  align-items-center'><strong>Excellent</strong><p className='mb-0 ms-3 me-3'> 4.6 out of 5</p><h6 className='d-flex mb-0 align-items-center'>
                        <FaStar className='text-success me-2 fs-5' />Trustpilot</h6></div></div>

<Row className='mt-5'>
    <Col sm={12} md={5} lg={5}> <Card className='bor'>
      <Card.Body className='bg-light bor pt-4 pb-4 ps-4 pe-4'>
        <Card.Title className='fs-5'>Buy Now</Card.Title>
       <div className='d-flex justify-content-between mt-4'> <Card.Text>
        radiantbloom.com
        </Card.Text>
        <Card.Text>
      <span className='fz'>  USD</span>
       <span className='clr'> $ 1,995</span>
        </Card.Text></div>
        <Button variant="dark" className='w-100 mt-3'>Next</Button>
        <Card.Title className='fs-6 text-center mt-5'>Need help? Give us a call.</Card.Title>
        <a className='text-decoration-none clr clrr d-flex justify-content-center fs-5 mt-3' href='#'>+1 480-651-9713</a>
      </Card.Body>
    </Card></Col>
    <Col sm={12} md={7} lg={7} className='pt-5 psr'>
    <p className='display-3 fw-bold'>radiantbloom.com</p><p className='fs-5'>is for sale!</p>
    </Col>
</Row>


              </Container>
            </Container>
            <Container fluid className='bcon  pb-5'>
<Row>
    <Col sm={12} md={5} lg={5}></Col>
    <Col sm={12} md={7} lg={7} className='psr '>
    <Row>
        <Col sm={12} md={4} lg={4} className='text-center pt-5'><FiShoppingCart className='fs-3'/> <p className='pff fs-5 fw-bold mt-4'>Simple, secure purchase & transfer</p></Col>
        <Col sm={12} md={4} lg={4} className='text-center pt-5'><IoShieldCheckmarkOutline className='fs-3' /><p className='pff fs-5 fw-bold mt-4'>Trusted by customers globally</p></Col>
        <Col sm={12} md={4} lg={4} className='text-center pt-5'><FaRegHeart className='fs-3' /><p className='pff fs-5 fw-bold mt-4'>24/7 dedicated support</p></Col>
        </Row></Col>
</Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Home