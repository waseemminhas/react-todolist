import React from 'react'
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <header style={styleHeader}>
      <h1 >Todo List</h1>
      <Link to='/' style={stylelink}>Home</Link> |
      <Link to='./about' style={stylelink}>About</Link> |
      <Link to='./contactus' style={stylelink} >Contact Us</Link>
    </header>
  )
}

const styleHeader = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'

}

const stylelink = {
  color: '#fff',
  padding: '2px'
}