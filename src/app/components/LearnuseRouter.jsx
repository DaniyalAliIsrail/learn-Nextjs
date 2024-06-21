"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const LearnuseRouter = () => {
    const router = useRouter();
    console.log("Router",router);
  return (
    <div>
        //router.push redirect krdeta js page pr ap jana chahay
        <button type="button" onClick={()=> router.push("/admin/dashboard")}>go to admin dashboard useing useRouter</button>
    </div>
  )
}

export default LearnuseRouter