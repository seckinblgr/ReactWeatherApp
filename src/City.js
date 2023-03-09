import React from 'react'

const City = ({city}) => {
  return (
    <div className=' flex-wrap justify-center   w-full h-[600px] mt-[50px] '>
        <div className=' flex justify-around text-center  flex-col'>
        <div className='text-2xl p-6 font-md tracking-widest '>
        <p className='text-zinc-500'>TEMPATURE </p><br />
            {Math.floor(city.main.temp)}
        </div>
        <div className='text-2xl p-6 font-md tracking-widest'>
        <p className='text-zinc-500'>CITY </p><br />
            {city.name}
        </div>
        <div className='text-2xl p-6 font-md tracking-widest'>g
           <p className='text-zinc-500'>WIND SPEED </p><br />
           {city.wind.speed}
        </div>
        </div>
   </div>
  )
}

export default City