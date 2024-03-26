import { Routes,Route } from "react-router-dom"
import { Header,Home,Login } from "./containers/public"
import { path } from "./utils/constant"
import React from "react"

export default function App() {

  return (
    <div className="app bg-primary">
      <Routes>
        <Route path={path.HOME} Component={Home}>
          <Route path={path.LOGIN} element={<Login></Login>}/>
        </Route>
        
        <Route path={path.HEADER} element={<Header></Header>}></Route>
      </Routes>
    </div>
  )

}