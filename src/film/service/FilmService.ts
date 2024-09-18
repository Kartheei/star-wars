import { client } from "../../utils";
import {
    GetAllFilmsResponseDTO,
    GetFilmResponseDTO
} from "../dto";
import {
    getAllFilmsQuery,
    getFilmQuery
} from "../graphql";


class FilmService {

    async getAllFilms(): Promise<GetAllFilmsResponseDTO[]> {
        try {
            const response = await client.query({
                query: getAllFilmsQuery
            });
            return response.data.allFilms.films;
        } catch (error) {
            console.error("Error fetching films: ", error);
            throw error;
        }
    }

    async getFilmById(id: string): Promise<GetFilmResponseDTO> {
        try {
            const response = await client.query({
                query: getFilmQuery,
                variables: { id: id }
            });
            return response.data.film;
        } catch (error) {
            console.error("Error fetching films: ", error);
            throw error;
        }
    };
}

export {
    FilmService
};