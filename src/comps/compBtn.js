import React from "react"
import { Link } from "react-router-dom"

const Button = () => {
  return (
    <div>
      <Link to="/data/form">
        <button className="bg-slate-500 w-25 h-16 rounded-2xl font-semibold font-mono tracking-widest text-3xl px-5">
          AÑADIR PERSONAJE
        </button>
      </Link>
    </div>
  )
}

export default Button