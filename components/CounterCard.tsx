import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from '@/components/ui/card';
import CounterButton from './CounterButton';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import { decrement, increment, reset } from '@/lib/features/counterSlice';
import { useAppSelector } from '@/lib/hooks';
import { Toaster } from 'sonner';

const CounterCard = () => {
    const count = useAppSelector((state) => state.counter.value);

    return (
        <>
            <Toaster />
            <Card className='w-full max-w-sm'>
                <CardHeader>
                    <CardTitle>Counter</CardTitle>
                    <CardDescription>A simple counter</CardDescription>
                    <CardAction>
                        {(count > 0 || count < 0) && <CounterButton className='' action={reset()} variant='destructive'>
                            <RotateCcw />
                        </CounterButton>}

                    </CardAction>
                </CardHeader>
                <CardContent className='grid gap-1'>
                    <p className='text-4xl text-zinc-500'>{count}</p>
                </CardContent >
                <CardFooter>
                    <div className='flex flex-row gap-x-1'>
                        <CounterButton action={increment()} variant='outline'>
                            <Plus />
                        </CounterButton>
                        <CounterButton action={decrement()} variant='outline'>
                            <Minus />
                        </CounterButton>
                    </div>
                </CardFooter>
            </Card >
        </>

    );
}

export default CounterCard;