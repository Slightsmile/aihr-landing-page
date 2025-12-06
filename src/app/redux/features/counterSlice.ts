
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialSlice: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialSlice,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
}) 

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer; 