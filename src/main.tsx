import CounterCard from '@/components/CounterCard';



export function Main() {

  return (
    <div className='flex flex-col gap-y-2'>
      <h1 className='text-6xl col-span-2 bg-clip-text font-extrabold text-transparent bg-linear-to-r from-green-500 to-purple-500'>Farm + React + Redux</h1>
      <div className='col-span-2 flex justify-center items-center'>
        <CounterCard />
      </div>
      <p className='text-center'>Edit <i className='underline'>src/main.tsx</i> to get started.</p>
    </div>
  );
}
