import { Form, Input,Select,Modal,Button} from 'antd';
import{EditOutlined,DeleteOutlined }from '@ant-design/icons';
import {  createContext} from 'react';


import './App.css';
import 'antd/dist/antd.css';
import { Space, Switch, Table } from 'antd';
import React, { useState } from 'react';






const App=()=> {  
    const [isEditStudent, setIsEditStudent] = useState(false);
    const [ editing,setEditing]=useState(null)
     const [dataSource,setDataSource]=useState(
       [
         {
         id:1,
         name:"Raju",
         age:20,
         address:'Hydrabad'
         
       },
       {
        id:2,
        name:"Ravi" ,
        age:23,
        address:'goa'
        
      }
      ]
     )
  
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // width: '12%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      // width: '12%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      // width: '30%',
      key: 'address',
    },
    {
      title: 'Action',
      // dataIndex: '',
      // width: '30%',
      key: 'Action',
      render:(record)=>{
        return<>
        <EditOutlined onClick={()=>onEditeStudent(record)}/>
        <DeleteOutlined onClick={()=>{
          onDeleteAddress(record)
          console.log(record,"onclick")
        }} style={{color:'red',marginLeft:12}}/>
        </>
      }
    },

  ];
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };



  
  // const submitHandlerStore=(record,e)=>{
  //   e.preventDefault();
  //   console.log("recordinsubmit",record)
  //   console.log("e",e)
  //   setStorage([...storage,{name:storeName}])
  // }
   const addAddress=()=>{
     const randomNumber=parseInt(Math.random()*1000)
     const newAddress={
      id:randomNumber,
      name:"Name"+randomNumber,
      age:randomNumber,
      address:'Address'+randomNumber
      
    };
     setDataSource(pre=>{
       return[...pre,newAddress]
     })
   };

    const onDeleteAddress=(record)=>{
      console.log(dataSource,"=====")
      Modal.confirm({
        title:"Are you sure ,you want to delete this student  record?",
        onOk:()=>{
          setDataSource((pre)=>{
            return pre.filter((address)=>address.id!==record.id)
          })
        }

      })
    }

    const onEditeStudent=(record)=>{
       setIsEditStudent(true)
       setEditing({...record})
    }

    const resetediting=()=>{
      setEditing(false)
      setIsEditStudent(null)
    }
  return (
     <div className="App">  
    <h1>cw solution</h1>
    {/* <h1>hello</h1> */}
   {/* {console.log("data",data)} */}
    {/* <div>
    <store.Provider value={[datavalue, setDataValue]}>
      <center> */}
        {/* <ComponentA/>
        <ComponentB/> */}
        {/* <Button onClick={()=>setDataValue(datavalue+1)}>increment</Button>  */}
        {/* <Count/> 
        <Display/>
      </center>
   </store.Provider>
    </div> */}
<br/>
    {/* <div>
        <Button onClick={getdata}>add</Button>

    </div> */}
     {/* {console.log("=====",data)}
    {data && data.map(record=>{
      {console.log("=====",record)}
         return(
          <div key={record.id}> 
       
             {<span>{record.type}</span>}<br/> 
          
            <span>{record.name}</span><br/>
            <span>{record.ppu}</span><br/> 
            <form className="form" onSubmit={()=>submitHandlerStore(record)}>
                 <input text="text" onChange={(e)=>setStoreName(e.target.value)} placeholder="enter your brand"></input>
                 <input type="submit" value="Add"></input>
           </form>
            {console.log("====topping",record.topping[0].type)}
             
            <br/>
            {record.batters.batter && record.batters.batter.map(ele=>{
              <span>{console.log("ele",ele)}</span>
              return(
               <div style={{background:"pink"}}>
                   <span>{ele.id}</span><br/>
                   <span>{ele.type}</span>
              </div> 
              )
            })}  
          
             {record.topping && record.topping.map(text=>{
            <span>{console.log("text===",text)}</span>  
              return(
               <div key={text.id} style={{background:"blue"}} >  
                 <span>{text.type}</span><br/>         
                </div> 
              )
            })} 
          </div>  */}
         

        {/* )
    })
    }  */}
    <>
      {/* <Space
        align="center"
        style={{
          marginBottom: 16,
        }}
      >
        CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
      </Space> */}
      <Button onClick={addAddress}>Add a Student</Button>
      <Table
        columns={columns}
        // rowSelection={{ ...rowSelection, checkStrictly }}
 
        dataSource={dataSource}
      />
        <Modal title="Edit student" visible={isEditStudent} okText="save" onOk={()=>
        {
          setDataSource((pre)=>{
            return pre.map((student)=>{
              if(student.id===editing.id){
                return editing
              }else{
                return student
              }
            }
            )
          }

          )
          resetediting()}} 
          onCancel={()=>{
          resetediting()
         }}>
         <Input value={editing?.name} onChange={(e)=>{
         setEditing(pre=>{
         return{...pre ,name:e.target.value}})
         }}/> 
         <Input value={editing?.age} onChange={(e)=>{
         setEditing(pre=>{
         return{...pre ,age:e.target.value}})
         }}/> 
         <Input value={editing?.address} onChange={(e)=>{
         setEditing(pre=>{
         return{...pre ,address:e.target.value}})
         }}/> 
      </Modal>
    </>
  </div> 
  );
}

export default App;

