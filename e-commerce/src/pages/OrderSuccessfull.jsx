import React, { useEffect } from 'react'
import { Alert, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { clearCart } from '../store/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function OrderSuccessfull() {
    const location = useLocation()
    const { orderId, totalPrice } = location.state || {};
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCart())
    }, [dispatch])
    return (
        <>
            <Container className='successful-container'>
                <img src='https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-happy-shopping-light-spot-poster-background-image_122448.jpg' alt='245' className='vh-100  d-flex align-items-center' />
                <Alert className='position-absolute top-50 start-50 translate-middle customGradiant'>
                    <div>
                        <p className='text-center'>
                            Order Successfull
                            <FontAwesomeIcon icon={faCheck}
                                className='ms-3 '
                                size='2xl'
                                style={{ color: "#FFB43B", }} />
                        </p>
                        <p>Order ID: {orderId}</p>
                        <p>Total Price: {totalPrice}</p>
                        <div className='d-flex'>
                            <Link to={'/order-history'} className='mx-auto'>
                                <Button type='button'
                                    className=''>Go check to order status</Button>
                            </Link>
                        </div>
                    </div>
                </Alert>
            </Container>
        </>
    )
}

export default OrderSuccessfull