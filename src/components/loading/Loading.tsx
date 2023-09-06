export default function Loading() {
    return (<div className='w-full h-screen flex justify-center items-center'>
        <div className='w-full h-96 flex justify-center items-center gap-2'>
        <div className='w-5 h-5 rounded-full bg-memyo-yellow1 motion-safe:animate-bounce'></div>
        <div className='w-5 h-5 rounded-full bg-memyo-yellow2 motion-safe:animate-bounce'></div>
        <div className='w-5 h-5 rounded-full bg-memyo-yellow3 motion-safe:animate-bounce'></div>
        <div className='w-5 h-5 rounded-full bg-memyo-yellow4 motion-safe:animate-bounce'></div>
        <div className='w-5 h-5 rounded-full bg-memyo-yellow5 motion-safe:animate-bounce'></div>
    </div>
    </div>);
}

