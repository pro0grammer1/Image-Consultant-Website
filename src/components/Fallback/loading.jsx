import { useState } from 'react'


function Loading() {
  const circle = 'bg-gray-300 w-6 h-6 animate-bounce rounded-full m-2';
  return (
    <>
      <div className='w-screen h-screen'>
        <div className='flex place-content-center relative top-1/2 -translate-y-1/2'><span className={circle + ' [animation-delay:150ms;]'}></span><span className={'[animation-delay:500ms;] ' + circle}></span><span className={' ' + circle}></span></div>
      </div>
    </>
  )
}

export default Loading
