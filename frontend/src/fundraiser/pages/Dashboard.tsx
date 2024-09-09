import React from 'react'
import Image from '../atom/Image'
import Card from '../molecule/Card'

const Dashboard = () => {
  return (
    <main className="">
        <section className="relative h-[25vh]">
            <Image className='h-full' imgClassName='object-cover' src='/images/forest.jpg' />
            <div className="blk_graet_bg bg-blkGradient w-full absolute top-0 h-full  "></div>
            <div className="absolute bottom-0 text-white  px-8 w-[60%]">
                <h3 className=" text-[2.5rem] font-bold">Good of the Earth</h3>
                <p className="text-[1rem]">Good of the Earth is a non-profit organization dedicated to environmental conservation. We focus on reforestation projects, aiming to plant trees in deforested areas across the globe. </p>
            </div>
        </section>
        <section className="flex flex-wrap justify-center items-center mt-7 w-full">
            <div className=" w-[80%]  flex flex-wrap items-center justify-around sdgap-[20px]">
          <Card title='Total Amount Raised' active={true} />
          <Card  title='Number of Donators' active={false} />
          <Card title='' />
        </div>
        </section>
    </main>
  )
}

export default Dashboard