import React from 'react'
// [...] catch all 
//localhost//:3000/blog/post post item wala page show kray ga ya post kay jaga kch bhy lkhdo forexample
//localhost//:3000/blog/e454 pr show post wala page hey hoga
// ho show ye wala page hey kray ga.

const posts = ({params}) => {
  console.log(params);
  return (
    <div>posts Items</div>
  )
}

export default posts