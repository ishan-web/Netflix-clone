import axios from "axios";
import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from "./ListActions";

export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try{
        const res = await axios.get("/lists",
        {
            headers: {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
        });
        dispatch(getListsSuccess(res.data));
    }catch(err){
        dispatch(getListsFailure());
    }
};

//CREATE

export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try{
        const res = await axios.post("/lists", list, 
        {
            headers: {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,},
        });
        dispatch(createListSuccess(res.data));
    }catch(err){
        dispatch(createListFailure());
    }
};

// // //UPDATE

// // export const updateMovie = async (id, dispatch) => {
// //     dispatch(updateMovieStart());
// //     try{
// //         const res = await axios.post("/movies/"+id, 
// //         {
// //             headers: {
// //                 token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,},
// //         });
// //         dispatch(updateMovieSuccess(res.data));
// //     }catch(err){
// //         dispatch(updateMovieFailure());
// //     }
// // };

//DELETE

export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try{
        await axios.delete("/lists/"+id,
        {
            headers: {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,},
        });
        dispatch(deleteListSuccess(id));
    }catch(err){
        dispatch(deleteListFailure());
    }
};