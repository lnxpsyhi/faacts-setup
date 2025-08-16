import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { toast } from "sonner";

export interface CounterState {
    value: number;
    byValue: number;
}

const initialState: CounterState = {
    value: 0,
    byValue: 1,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += state.byValue;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
            toast('Action done!', {
                description: 'The counter has been reset.',
                position: 'top-center',
            });
        },
        setByValue: (state, action: PayloadAction<number>) => {
            state.byValue = action.payload;
        }
    }
});

export const { increment, decrement, reset, setByValue } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer