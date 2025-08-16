import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from './ui/card';
import CounterButton from './CounterButton';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import { decrement, increment, reset, setByValue } from '@/lib/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Toaster } from 'sonner';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { DialogClose } from '@radix-ui/react-dialog';

const CounterCard = () => {
    const dispatch = useAppDispatch()
    const count = useAppSelector((state) => state.counter.value);
    const byValue = useAppSelector((state) => state.counter.byValue);

    return (
        <>
            <Toaster />
            <Card className='w-full max-w-sm'>
                <CardHeader>
                    <CardTitle>Counter</CardTitle>
                    <CardDescription>A simple counter</CardDescription>
                    <CardAction>
                        {(count > 0 || count < 0) && <CounterButton className='' action={reset()} variant='destructive' tooltip='Reset the counter'>
                            <RotateCcw />
                        </CounterButton>}
                    </CardAction>
                </CardHeader>
                <CardContent className='grid gap-1'>
                    <p className='text-4xl text-zinc-500'>{count}</p>
                </CardContent >
                <CardFooter>
                    <div className='flex flex-row gap-x-1'>
                        <CounterButton action={increment()} variant='outline' tooltip=''>
                            <Plus />
                        </CounterButton>
                        <CounterButton action={decrement()} variant='outline' tooltip=''>
                            <Minus />
                        </CounterButton>

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
                    </div>
                </CardFooter>
            </Card >
        </>

    );
}

export default CounterCard;