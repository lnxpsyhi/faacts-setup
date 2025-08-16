
import { Button } from '@/components/ui/button';
import { increment } from '@/lib/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toast, Toaster } from 'sonner';


export function Main() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch()

  return (
    <>
      <Toaster richColors position='top-center' theme='system' />
      <h1 className='text-5xl text-purple-600'>Hello, World!</h1>
      <Button onClick={() => {
        dispatch(increment())
        toast('Counter', {
          description: `${count}`,
        })
      }}>Click me</Button>

    </>
  );
}
