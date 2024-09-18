import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { female, male } from "../../utils/assets/images";
import "../../style.scss";
import { Header, Footer } from "../component";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const FilmDetails: React.FC = () => {
    debugger;
    const { id } = useParams<{ id: string }>();

    const films = useSelector((state: RootState) => state.films.items);
    const loading = useSelector((state: RootState) => state.films.status === "loading");
    const error = useSelector((state: RootState) => state.films.error);

    const film = films.find(film => film.id === id);

    useEffect(() => {
        if (!id) return;
        window.scrollTo(0, 0);
    }, [id]);

    if (!id) {
        return (
            <div className="centered-box">
                <div className="message-box">
                    <strong>Film ID is missing from the URL</strong>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="centered-spinner">
                <Spinner animation="grow" className="large-spinner" />
            </div>
        );
    }
    if (error) {
        return (
            <div className="centered-box">
                <div className="message-box">
                    <strong>{error}</strong>
                </div>
            </div>
        );
    }

    if (!film) {
        return (
            <div className="centered-box">
                <div className="message-box">
                    <strong>No film data available</strong>
                </div>
            </div>
        );
    }
    return (
        <>
            <Header />
            <Container className="film-details-container my-5">
                <Row>
                    <Col md={12}>
                        <h2 className="mb-3 text-uppercase">{film.title} (Episode {film.episodeID})</h2>

                        <div>
                            <strong>Release Date : </strong>
                            <span>{new Date(film.releaseDate).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric"
                            })}</span>
                        </div>
                        <br />

                        <div>
                            <strong>Director : </strong>
                            {film.director}
                        </div>
                        <br />

                        <div>
                            <strong>Opening Crawl : </strong>
                            <p className="opening-crawl-text">{film.openingCrawl}</p>
                        </div>
                        <br />

                        <h4 className="mb-4">Characters</h4>
                        <Row>
                            {film.characterConnection.characters.map((character, index) => (
                                <Col key={index} xs={6} md={3} lg={2} className="mb-4 d-flex justify-content-center">
                                    <div className="character-card text-center">
                                        <img
                                            src={character.gender === "male" ? male : female}
                                            alt={character.name}
                                            className="character-avatar mb-2"
                                        />
                                        <div className="character-name">{character.name}</div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export { FilmDetails };
