import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logo } from "../../utils";


const Header: React.FC = () => {
    return (
        <header className="text-white py-3">
            <Container className="text-center">
                <Link to={"/"} className="link">
                    <img
                        src={logo}
                        alt="logo"
                        className="logo-img"
                    />
                </Link>
            </Container>
        </header>
    );
};

export { Header };
