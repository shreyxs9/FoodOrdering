import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
   const err =useRouteError();
   console.log(err);
  return (
    <div>
        <h1>Opps!!!</h1>
        <h3>Page nott found!!!!!!</h3>
    </div>
  )
}

export default Error;