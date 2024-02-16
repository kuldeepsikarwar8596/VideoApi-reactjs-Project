 import React, { useEffect, useRef, useState } from 'react'
 import GlobalApi from './Servises/GlobalApi'
 import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
 
 
 const IMAGE_BASE_URL="https://images.tmdb.org/t/p/original";
 const screenwidth = window.innerWidth
 function Slider() {
    const [MovieList, setMovieList] = useState([])

const elementRef = useRef();

    useEffect(()=>{
        getTrendingMovies()
    },[])
        const getTrendingMovies=()=>{
            GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

   
   const SliderLeft=(element)=>{
    element.scrollLeft-=screenwidth-110
   }
   const SliderRight=(element)=>{
    element.scrollLeft+=screenwidth-110
   }
    

   return (
    <div>
        <HiChevronLeft className='hidden md:block text-white text-[40px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>SliderLeft(elementRef.current)}/>

        <HiChevronRight className='hidden md:block text-white text-[40px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>SliderRight(elementRef.current)}/>
         


     <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth shadow-lg shadow-gray-800' ref={elementRef}>
       {MovieList.map((item)=>(
        <img src={IMAGE_BASE_URL+item.backdrop_path} 
        className='rounded-lg min-w-full md:h-[310px] object-cover object-left-top mr-5 hover:border-[4px] border-gray-200 transition-all '/>
       ))}
     </div>
     </div>
   )
 }
 
 export default Slider