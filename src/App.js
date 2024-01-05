import { Form, Input,Select,Modal,Button,Row,Col} from 'antd';
import{EditOutlined,DeleteOutlined }from '@ant-design/icons';
import {  createContext} from 'react';

import fromNames from "./from.json" 
import './App.css';
import 'antd/dist/antd.css';
import { Space, Switch, Table } from 'antd';
import React, { useState } from 'react';






const App=()=> {  
  // const [form] = Form.useForm();  
  const [sku,setSKU]=useState("");
  const[name,setName]=useState("");
  const [decription,setDecription]=useState("")

  
  
    const onFinish = (values) => { 
      // values.preventDefault();
   
      console.log("valus",values); 
      let list ={}
           list.SKU=values.SKU
      list.name=values.Name  
      list.Decription=values.Decription
    console.log("list",list)
  
  

    };
  
  return (
     <div className="App" style={{padding:'90px'}}>  
    <h1 style={{marginRight:'300px',marginBottom:'40px'}}>CW</h1>
  <div>{console.log("json",fromNames)}</div>  
  <div>
  
     <Form  onFinish={onFinish} >  
     <Row gutter={16 }>
      <Col span={8}>
    {fromNames.from.map((e,index)=>(
      <Form.Item
      key={index}
        name={e.label}
        label={e.label}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type={e.type} placeholder={e.placeholder}  style={{width:'300px'}} />
      </Form.Item> 
    ))}
    
      <Form.Item
        
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Col>
     </Row>
    </Form>
    {/* </div>
   
   ))}  */}
   </div>
  </div> 
  );
}

export default App;

