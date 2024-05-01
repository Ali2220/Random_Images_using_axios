"use client"
import React, { useState } from 'react'
import axios from 'axios'
const page = () => {
  
  const [Images, setImages] = useState([])
  const getImages = async () => {
  try{
    const response = await axios.get("https://picsum.photos/v2/list")
    const data = (response.data);
    setImages(data)
    console.log(Images)
  }
  catch(error){
    console.log("error")
  }

  }
 
  return (
   <>
    <div>
      <button onClick={getImages} className='px-5 py-2 border-2 m-10 bg-gray-700 text-white rounded-lg cursor-pointer'>Get Images</button>
      <div className='p-7'>
        {Images.map((elem, i)=>{
          return <img key={i} src= {elem.download_url} width={200} height={200} className='m-10 rounded inline-block'/>
        })}
      </div>
    </div>
   </>
  )
}

export default page
