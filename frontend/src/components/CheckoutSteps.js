import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>ログイン</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>ログイン</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>お届け先</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>お届け先</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>お支払い</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>お支払い</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>注文情報</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>注文情報</Nav.Link>
                    )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
