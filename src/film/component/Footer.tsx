import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../style.scss';

const Footer: React.FC = () => {
    return (
        <footer className="text-white mt-5">
            <Container>
                <Row className="py-4">
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Star Wars Films. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export { Footer };
