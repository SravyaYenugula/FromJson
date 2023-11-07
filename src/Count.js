import React,{useContext} from 'react'
import { store } from './App'

const Count = () => {
    const [datavalue, setDataValue]=useContext(store)
    return (
        <div >
        <h1>count:{datavalue.length}</h1> 
        </div>
    )
}

export default Count

