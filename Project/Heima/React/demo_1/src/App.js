import { useState } from "react";

const list = [
  {'id':1,
    'user':{
      'uid':'123',
      'uname': 'Tom'
    },
    'content': 'Good',

  },
  {'id':2,
    'user':{
      'uid':'124',
      'uname': 'Tommy'
    },
    'content': 'Bad',
  }
]
const user = {
  'id':'124',
  'uname':'Tommy'
}


function App() {
  const [commentList, setCommentList] =  useState(list)

  const handleDele = (id)=>{
    console.log(id)
    setCommentList(commentList.filter(item => item.id !== id))
  }
  return (
    <div className="App" >
      {commentList.map(item => (
        <div className="conmmetInfo" key={item.id}>
        <span>{item.content}</span>
        <span>{item.id}</span>  
        <span>{item.user.uname}</span>
        {user.id === item.user.uid && <span onClick={()=>handleDele(item.id)}>Delete</span>}
        
      </div>
      ))}
    </div>
  );
}

export default App;
