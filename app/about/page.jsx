import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
      <div className="bg-black text-white tracking-widest w-screen h-screen flex flex-col justify-between absolute top-0 left-0 z-10">
          <Image
            src="/logo.jpg"
            width={200}
            height={200}
            alt="logo image"
            className={ `absolute top-0 left-1/2 translate-x-[-50%] z-10` }
          />
      <div className='flex items-center justify-center text-7xl h-full z-10'>This is the next page</div>
        <div className="absolute w-[30rem] h-[30rem] z-0 top-10 right-20 bg-gradient-radial from-stone-700 via-black to-black blur-3xl" />
        <div className="absolute w-[30rem] h-[30rem] z-0 bottom-20 left-20 bg-gradient-radial from-stone-700 via-stone-900 to-black blur-3xl" />
    </div>
  )
}

export default Page
