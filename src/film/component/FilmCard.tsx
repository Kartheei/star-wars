import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { getAllFilmImagesHelper } from "../../utils";
import { GetAllFilmsResponseDTO } from "../dto";


interface FilmCardProps {
    films: GetAllFilmsResponseDTO[];
}

const FilmCard: React.FC<FilmCardProps> = ({ films }) => {

    const filmImages = getAllFilmImagesHelper();

    return (
        <Row>
            {films.map((film) => (
                <Col key={film.id} xs={12} md={4} className="mb-3 col-card">
                    <Link to={`/films/${film.id}`} className="link">
                        <Card className='filmCard'>
                            <Card.Img variant="top"
                                className="posterImage"
                                src={filmImages[film.id]}
                                alt={`${film.title} poster`}
                            />

                            <Card.Body>
                                <Card.Title>{film.title}</Card.Title>
                                <Card.Subtitle>(Episode {film.episodeID})</Card.Subtitle>
                                <Card.Text>
                                    <strong>Directed by:</strong> {film.director}
                                    <br />
                                    <strong>Released on:</strong> {film.releaseDate}
                                    <br />
                                    <strong>Summary</strong> <br />
                                    {film.openingCrawl.substring(0, 100)}...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))
            }
        </Row >
    );
};

export {
    FilmCard
};
