import { useState } from 'react'
import CreatePost from './component/CreatePost'
import PostList from './component/PostList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreatePost />
      <PostList />
    </>
  )
}

export default App
