import React from 'react'
import Sidebar from './Sidebar'
import "./styles/Dashboard.scss"

export default function Dashboard({id}) {
  return (
    <div className="sidebar-container">
      <Sidebar id={id} />
    </div>
  )
}
