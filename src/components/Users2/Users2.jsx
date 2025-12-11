import React, { use } from 'react'

const Users2 = ({userPromise}) => {

    const users = use(userPromise);

    console.log("User to suspense data laod", users);
  return (
    <div>
        <h2> This is a Users2</h2>
    </div>
  )
}

export default Users2