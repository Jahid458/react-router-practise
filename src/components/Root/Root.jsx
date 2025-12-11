import React from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router'
import { Footer } from '../Footer/Footer'

export const Root = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
