import { createSlice } from "@reduxjs/toolkit";

const userBoard = [];
const opponentBoard = [];

function boardRender (board, id) {
    for (let i = 0; i < 100; i++) {
       board.push([id+i, "white"])
    }
}

boardRender(userBoard, "u");
boardRender(opponentBoard, "o");

const boardsSlice = createSlice ({
    name: 'boards',
    initialState: {
        userBoard: userBoard,
        opponentBoard: opponentBoard,
        opponentShips: [],
        userShips: [],
    },
    reducers: {
        fillOpponentBoard() {

        }
    }
})

export const { renderUserBoard } = boardsSlice.actions;
export default boardsSlice.reducer