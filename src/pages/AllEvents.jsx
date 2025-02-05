import EventCard from '../components/EventCard'
import React from 'react'

const AllEvents = () => {
  return (
    <div className='p-4 flex flex-col w-full'>
        <div className='w-full flex justify-between item-center'>
        <h1 className='text-2xl font-semibold'>All Events</h1>
        <div >Filters</div>
        </div>

        <div className='grid grid-cols-5 gap-x-4 gap-y-4 mt-[100px]'>
            {Array(10).fill(0).map((item,index)=>(
                <div key={index}>
                    <EventCard key={index}/>
                </div>
                
            ))}
        </div>
        
    </div>
  )
}

export default AllEvents