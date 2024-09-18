import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { FilmService } from "../service/FilmService";
import { GetAllFilmsResponseDTO } from "../dto";


interface FilmsState {
    items: GetAllFilmsResponseDTO[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    isFetched: boolean;
}
const initialState: FilmsState = {
    items: [],
    status: "idle",
    error: null,
    isFetched: false
};


export const fetchFilms = createAsyncThunk<GetAllFilmsResponseDTO[]>("films/fetchFilms", async () => {
    const filmService = new FilmService();
    const response = await filmService.getAllFilms();
    return response;
});


const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFilms.fulfilled, (state, action: PayloadAction<GetAllFilmsResponseDTO[]>) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch films";
            });
    },
});

export default filmsSlice.reducer;
