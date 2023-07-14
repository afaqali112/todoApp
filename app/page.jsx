"use client"
import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'

const Home = () => {
  const [data, setdata] = useState("");
  const [item, setitem] = useState ([ ]);
    const additem = () => {
      if(!data){
        alert("please fill the data")
      }else{
        setitem([...item,data])
        setdata("");

      }
    }
  const deleteitem = (id) => {
    const updateditem = item.filter((elem,ind)=>{
      return ind !== id;
    })
    setitem(updateditem)
  }
  return (
<section className="w-full my-10  mx-auto h-[50rem] mt-20 bg-white overflow-x-hidden">
   <h1 className="text-center  left-20 mt-10 text-4xl">ToDo APP</h1>
    <div className="flex  justify-between mt-10">
      <input type="text" className="border-2 border-gray-300 w-2/3  h-10 rounded-lg mx-auto px-2" placeholder="Enter your task"
      value={data} onChange={(e)=>setdata(e.target.value)}
      
      />
    <button className="bg-green-500 text-white w-24 h-10 rounded-lg mx-auto" onClick={additem}>Add</button>
    </div>
    
    
      {item.map((elem,ind)=>(
        <div className="relative ml-2 right-36">

        
        <div className="flex mt-10 border mx-52 justify-between px-3 rounded-lg">
        <h1 className='font-semibold text-xl' key={ind}>{elem}</h1>
        <AiFillDelete className="text-4xl  cursor-pointer " onClick={()=>deleteitem(ind)}/>
        </div>
        </div>
        ))}


    </section>

    )
}

export default Home