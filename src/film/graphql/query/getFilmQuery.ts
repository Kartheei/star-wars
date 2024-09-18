import { gql } from "@apollo/client";

const getFilmQuery = gql`
query getFilm($id: ID) {
  film(id: $id) {
    id
    title
    releaseDate
    director
    episodeID
    characterConnection {
      characters {
        id
        name
        gender
      }
    }
    openingCrawl
  }
}
`;

export {
  getFilmQuery
};