
import { Button } from '@/components/ui/button';
import { toast, Toaster } from 'sonner';


export function Main() {
  return (
    <>
      <Toaster richColors position='top-center' theme='system' />
      <h1 className='text-5xl text-purple-600'>Hello, World!</h1>
      <Button onClick={() => toast('Hi!', {
        description: 'I am a toast.',
      })}>Click me</Button>

    </>
  );
}
