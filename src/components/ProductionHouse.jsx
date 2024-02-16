import React from 'react'
import disney from './../assets/Image/disney.png'
import marvel from './../assets/Image/marvel.png'
import pixar from './../assets/Image/pixar.png'
import starwar from './../assets/Image/starwar.png'
import nationalG from './../assets/Image/nationalG.png'
 
 
 
import BGV from './../assets/Image/BGV.mp4'
 


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:BGV
        },
        {
            id:2,
            image:pixar,
            video:BGV
        },
        {
            id:3,
            image:marvel,
            video:BGV
        },
        {
            id:4,
            image:starwar,
            video:BGV
        },
        {
            id:5,
            image:nationalG,
            video:BGV
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' /> 
               
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse