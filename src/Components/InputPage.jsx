import { useState } from "react";

const InputPage = () => {
    const [count,setCount]=useState(0,0);
    const [input,setInput]=useState("");
    const counter=(e)=>{
      const list=e.target.value;
       setInput(list);
       const CharCount=list.length;
       const  WCount=list.trim().split(/\s+/).length;
        setCount({
         CharacterCount:CharCount,
         WordCount:WCount,
        })

    }
    
  return <div className=" max-w-sm absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
    <h1 className=" flex items-center text-5xl font-extrabold ">TextMetrics<span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">360</span></h1>
    <p class="mb-3 text-gray-500 "><span className="text-xl font-bold ">Decode, Analyze, Enlighten! </span> <br/>Discover the essence of content with our innovative project. TextMetrics360 unveils the hidden dimensions of language, revealing word counts and character intricacies at a glance</p>
    <div  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
   
   <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={counter}  placeholder="Enter the string.." />
   <h3 className="text-2xl "><span className="text-2xl bold ">Number of characters:{count.CharacterCount}</span></h3>
   <h3 className="text-2xl "><span className="text-2xl bold ">Number of Words:{count.WordCount}</span></h3>
   

   
 </div>;
  </div>
};

export default InputPage;
