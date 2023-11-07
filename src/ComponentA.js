import React,{useContext} from 'react'
import { store } from './App'

const ComponentA=()=> {
    const [datavalue, setDataValue]=useContext(store)
    return (
        <div>
        heelo{datavalue}
        </div>
    )
}

export default ComponentA
