import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { toast } from "sonner";

export interface CounterState {
    value: number,
}

const initialState: CounterState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
            toast('Action done!', {
                description: 'The counter has been reset.',
                position: 'top-center',
            });
        }
    }
});

export const { increment, decrement, incrementByValue, reset } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer