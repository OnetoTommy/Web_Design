// The root of Project
// APP-index.js-public/index.html
import { useState } from "react";
import './index.css'



// list
// const list = [
//   {id: 1001, name:'Vue'},
//   {id: 1002, name:'React'},
//   {id: 1003, name:'Angular'}
// ]

// const isLogin = false

// const articleType = 1 //0 1 3
// function getArticleTem(){
//   if (articleType === 0){
//     return <div>No image</div>
//   }else if(articleType === 1){
//     return <div>1 image</div>
//   }else{
//     return <div>3 image</div>
//   }
// }

// //定义组件
// const Button = () =>{
//   return <button>Click here</button>
// }

const list = [
  {
  "rpid": 3,  
  "user": {
    "uid": "13258165",
    "avatar": "http://toutiao.itheima.net/resources/images/98.jpg",
    "uname": "周杰伦"
  },
  "content": "哎哟，不错哦",
  "ctime": "10-18 08:15",
  "like": 88
  }
]
const user = {
  uid: "13258165",
  avatar: "http://toutiao.itheima.net/resources/images/98.jpg",
  uname: "周杰伦"
}
const tabs = []

// useState


function App() {
  // const handleClick = () =>{
  //   console.log('button click')
  // }

// const handleClk= (name, e) =>{
//   console.log('button', name, e);
  
// }

  // useState
  const [count, setCount] = useState(0)
  const handleClick = () =>{
    setCount(count + 1)
  }

  const [form, setForm] = useState({name:'Jack'})
  const getForm = () =>{
    setForm({
      ...form,
      name:'Tom'
    })
  }

  return (
    <div className="App">
      This is App
      {/* map method for LIST */}
      {/* Key is id that react framework for performance */}
      {/* <ul>
        {list.map(item => <li key = {item.id}>{item.name}</li>)}
      </ul> */}
      <br></br>
      {/* and */}
      {/* {isLogin && <span>This is world</span>} */}
      {/* control 2 elements */}
      {/* {isLogin ? <span>This is world</span>:<span>Loading</span>} */}
      {/* {getArticleTem()} */}
      {/* <button onClick={handleClick()}>click me </button> */}
      {/* {<button onClick={(e) => handleClk('Jack', e)}>Click</button>} */}
      {/* <Button />
      <Button></Button> */}

      <button onClick={handleClick}>{count}</button>
      <button onClick={getForm} className="foo">Modify Form{form.name}</button>
    </div>
  );
}

export default App;
