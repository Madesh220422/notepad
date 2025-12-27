import React from 'react'
import Add from '../assets/add.svg?react'
import { Link } from 'react-router-dom'

function Addbutton() {
  return (
    <>
        <div>
            <Link to="/note/new" className="floating-button">
                <Add/>
            </Link>
        </div>
    </>
  )
}

export default Addbutton