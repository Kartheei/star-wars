interface GetFilmCharacterConnectionCharacterResponseDTO {
    id: string;
    name: string;
    gender: string;
}


interface GetFilmCharacterConnectionResponseDTO {
    characters: GetFilmCharacterConnectionCharacterResponseDTO[];
}

interface GetAllFilmsResponseDTO {
    director: string;
    episodeID: number;
    id: string;
    openingCrawl: string;
    releaseDate: string;
    title: string;
    characterConnection: GetFilmCharacterConnectionResponseDTO;

}

export type {
    GetAllFilmsResponseDTO
};