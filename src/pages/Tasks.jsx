import React from 'react'
import { useSelector } from 'react-redux'

const Tasks = () => {
  const {user} = useSelector((store) => store);

  console.log(user);
  return (
    <>
    <div>
      <h2>Hello</h2>
      <h2>{user.user_name}</h2>
    </div>
    </>
  )
}

export default Tasks