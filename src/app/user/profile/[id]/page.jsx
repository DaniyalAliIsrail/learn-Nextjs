import React from 'react'

const MyProfile = ({params}) => {
    console.log(params);
    console.log("daniyal");

  return (
    <div>my client id is {
      params.id}
    </div>
  )
}

export default MyProfile