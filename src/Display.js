import React,{useContext,useState} from 'react'
import { store } from './App'

const Display = () => {
    const [datavalue, setDataValue]=useContext(store)
    const [name,setName]=useState("");

    const submitHandler=e=>{
        e.preventDefault();
        setDataValue([...datavalue,{brandname:name}])
    }

    return (
        <div>
        {console.log("----",datavalue)}
           {datavalue.map(item=><h1>{item.brandname}</h1>)}
           <form className="form" onSubmit={submitHandler}>
                 <input text="text" onChange={(e)=>setName(e.target.value)} placeholder="enter your brand"></input>
                 <input type="submit" value="Add"></input>
           </form>
        </div>
    )
}

export default  Display
