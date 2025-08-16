import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { DialogClose } from '@radix-ui/react-dialog';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setByValue } from '@/lib/features/counterSlice';

const NumberPrompt = () => {
    const byValue = useAppSelector((state) => state.counter.byValue);
    const dispatch = useAppDispatch()
    return (

        <Dialog>
            <DialogTrigger>
                <Button variant='secondary' >Increment by value</Button>
            </DialogTrigger>
            <DialogContent>

                <DialogHeader>
                    <DialogTitle>Input a number</DialogTitle>
                    <DialogDescription>
                        Increment the counter by
                    </DialogDescription>
                    <Input type='number' placeholder='Enter a number' onChange={(e) => {
                        try {
                            e.preventDefault();
                            const val = Number.parseInt(e.target.value);
                            dispatch(setByValue(val));
                        } catch (e) {
                            console.error(e);
                        }
                    }} value={byValue} />

                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button about='test'>Ok</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default NumberPrompt