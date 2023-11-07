import React,{useContext} from 'react'
import { store } from './App'

const ComponentB=()=> {
    const [datavalue, setDataValue]=useContext(store)
    return (
        <div>
            compenrnt{datavalue}
        </div>
    )
}

export default ComponentB
