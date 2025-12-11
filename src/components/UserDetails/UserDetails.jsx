import React from 'react'
import { useLoaderData } from 'react-router'

const UserDetails = () => {

    const user = useLoaderData();
    console.log(user);

    const{website, name} = user
  return (
    <>
    <div>UserDetails Here </div>
    <h2>Name: {name} </h2>
    <h3>website: {website}</h3>
    
    </>
  )
}

export default UserDetails