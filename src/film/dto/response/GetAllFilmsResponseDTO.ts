
interface GetAllFilmsCharacterConnectionCharacterResponseDTO {
    id: string;
    name: string;
}


interface GetAllFilmsCharacterConnectionResponseDTO {
    characters: GetAllFilmsCharacterConnectionCharacterResponseDTO[];
}

interface GetAllFilmsResponseDTO {
    director: string;
    episodeID: number;
    id: string;
    openingCrawl: string;
    releaseDate: string;
    title: string;
    characterConnection: GetAllFilmsCharacterConnectionResponseDTO;
}

export type {
    GetAllFilmsCharacterConnectionCharacterResponseDTO,
    GetAllFilmsCharacterConnectionResponseDTO,
    GetAllFilmsResponseDTO
};