import React, { useState, useEffect } from "react";
import { Container, Row, Dropdown, ButtonGroup } from "react-bootstrap";
import "../../style.scss";
import { GetAllFilmsResponseDTO } from "../dto";
import { FilmService } from "../service";
import { FilmCard, Header, Footer } from "../component";


const Home: React.FC = () => {
    const [films, setFilms] = useState<GetAllFilmsResponseDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [sortOption, setSortOption] = useState<string>("episode");

    useEffect(() => {
        const filmService = new FilmService();

        const fetchFilms = async () => {
            try {
                const fetchedFilms = await filmService.getAllFilms();
                setFilms(fetchedFilms);
            } catch (error) {
                setError("Error fetching films");
            } finally {
                setLoading(false);
            }
        };
        fetchFilms();
    }, []);

    const sortFilms = (films: GetAllFilmsResponseDTO[]) => {
        switch (sortOption) {
            case "title":
                return [...films].sort((a, b) => a.title.localeCompare(b.title));
            case "releaseDate":
                return [...films].sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
            case "episode":
                return [...films].sort((a, b) => a.episodeID - b.episodeID);
            default:
                return films;
        }
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header />
            <Container>
                <Dropdown as={ButtonGroup} className="mb-3">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Sort By: {sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSortOption("title")}>Title</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSortOption("releaseDate")}>Release Date</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSortOption("episode")}>Episode Number</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Row>
                    <FilmCard films={sortFilms(films)} />
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export { Home };
