import { createSlice } from "@reduxjs/toolkit"

const shipsSlice = createSlice ({
    name: 'ships',
    initialState: {
        //создаем массив кораблей. название, количество штук на поле, количество палуб
        ships: [
            {
                id: 0,
                name: "quattro",
                count: 1,
                towers: 4
            },
            {
                id: 0,
                name: "tre",
                count: 2,
                towers: 3
            },
            {
                id: 0,
                name: "duo",
                count: 3,
                towers: 2
            },
            {
                id: 0,
                name: "uno",
                count: 4,
                towers: 1
            }
        ]
    },
    reducers: {

    }
})

export default shipsSlice.reducer