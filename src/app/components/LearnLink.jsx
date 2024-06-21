import Link from 'next/link'
import React from 'react'

const LearnLink = () => {
    const id = 22;
  return (
    <div>
        LearnLink
   
            <Link href="/admin/profile"> move to admin profile page </Link>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <Link href={`/user/profile/${id}`}> move to user profile </Link>
    </div>
  )
}

export default LearnLink