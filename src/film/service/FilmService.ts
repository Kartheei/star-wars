import { client } from "../../utils";
import { GetAllFilmsResponseDTO } from "../dto";
import { getAllFilmsQuery } from "../graphql";


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
}

export {
    FilmService
};