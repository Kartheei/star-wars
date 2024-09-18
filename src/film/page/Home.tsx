import React, { useState, useEffect } from "react";
import { Container, Row, Dropdown, ButtonGroup } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import "../../style.scss";
import { GetAllFilmsResponseDTO } from "../dto";
import { FilmCard, Header, Footer } from "../component";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../redux/filmSlice";
import { RootState, AppDispatch } from "../redux/store";

const Home: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const films = useSelector((state: RootState) => state.films.items);
    const loading = useSelector((state: RootState) => state.films.status === "loading");
    const error = useSelector((state: RootState) => state.films.error);


    useEffect(() => {
        dispatch(fetchFilms());
    }, [dispatch]);

    const [sortOption, setSortOption] = useState<string>("episode");

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


    if (loading) {
        return (
            <div className="centered-box">
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
    return (
        <>
            <Header />
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
            <Container>
                <Row>
                    <FilmCard films={sortFilms(films)} />
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export { Home };
