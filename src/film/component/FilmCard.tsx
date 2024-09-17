import React from "react";
import { Card, Col } from 'react-bootstrap';
import { GetAllFilmsResponseDTO } from "../dto";
import {
    posterImageEpisode1,
    posterImageEpisode2,
    posterImageEpisode3,
    posterImageEpisode4,
    posterImageEpisode5,
    posterImageEpisode6
} from "../../utils/assets/images";
import '../../style.scss';


interface FilmCardProps {
    films: GetAllFilmsResponseDTO[];
}

const filmImages: { [key: string]: any } = {
    "ZmlsbXM6NA==": posterImageEpisode1,
    "ZmlsbXM6NQ==": posterImageEpisode2,
    "ZmlsbXM6Ng==": posterImageEpisode3,
    "ZmlsbXM6MQ==": posterImageEpisode4,
    "ZmlsbXM6Mg==": posterImageEpisode5,
    "ZmlsbXM6Mw==": posterImageEpisode6,
};

const FilmCard: React.FC<FilmCardProps> = ({ films }) => {
    return (
        <>
            {films.map((film) => (
                <Col key={film.id} md={4} className="mb-4">
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
                </Col>
            ))}
        </>
    )
}

export {
    FilmCard
}