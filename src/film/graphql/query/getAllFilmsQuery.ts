import { gql } from "@apollo/client";


const getAllFilmsQuery = gql`
query getAllFilms {
    allFilms
    {
        films
        {
            director
            episodeID
            id
            openingCrawl
            releaseDate
            title
        }
    }
}
`;

export {
    getAllFilmsQuery
};