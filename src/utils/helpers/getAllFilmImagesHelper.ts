import {
    posterImageEpisode1,
    posterImageEpisode2,
    posterImageEpisode3,
    posterImageEpisode4,
    posterImageEpisode5,
    posterImageEpisode6
} from "../assets";


function getAllFilmImagesHelper() {
    const filmImages: { [key: string]: any } = {
        "ZmlsbXM6NA==": posterImageEpisode1,
        "ZmlsbXM6NQ==": posterImageEpisode2,
        "ZmlsbXM6Ng==": posterImageEpisode3,
        "ZmlsbXM6MQ==": posterImageEpisode4,
        "ZmlsbXM6Mg==": posterImageEpisode5,
        "ZmlsbXM6Mw==": posterImageEpisode6,
    };

    return filmImages;
}

export {
    getAllFilmImagesHelper
};