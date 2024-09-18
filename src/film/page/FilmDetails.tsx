import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { female, male } from "../../utils/assets/images";
import "../../style.scss";
import { GetFilmResponseDTO } from "../dto";
import { FilmService } from "../service";
import { Header, Footer } from "../component";

const FilmDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [film, setFilm] = useState<GetFilmResponseDTO | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) throw new Error("Film id is required in Film details page");

        const filmService = new FilmService();

        const fetchFilmDetails = async () => {
            try {
                const filmData = await filmService.getFilmById(id);
                setFilm(filmData);
            } catch (error) {
                setError("Error fetching film details");
            } finally {
                setLoading(false);
            }
        };

        fetchFilmDetails();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!film) return <p>No film data available</p>;

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
