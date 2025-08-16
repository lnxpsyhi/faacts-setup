
import { Button } from '@/components/ui/button';
import { increment } from '@/lib/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toast, Toaster } from 'sonner';


export function Main() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch()

  return (
    <div className='grid grid-rows-2 grid-cols-2 gap-2'>
      <Toaster richColors position='top-center' theme='system' />
      <h1 className='text-6xl col-span-2 bg-clip-text font-extrabold text-transparent bg-linear-to-r from-green-500 to-purple-500'>Farm + React + Redux</h1>
      <div className='col-span-2 flex items-center justify-center'>
        <Button variant='outline' size='lg' onClick={() => {
          dispatch(increment())
          toast('Counter', {
            description: `${count}`,
          })
        }}>Click me!</Button>
      </div>

    </div>
  );
}
