import React from 'react';
import { Container } from 'react-bootstrap';
import '../../style.scss';

const Header: React.FC = () => {
    return (
        <header className="text-white py-3">
            <Container className="text-center">
                <h1>Star Wars Films</h1>
            </Container>
        </header>
    );
};

export { Header };
