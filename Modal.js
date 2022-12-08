import React from 'react'

export const Modal = ({ resolve }) => {
  const aceptar = () => {
    resolve('Javi Brig')
  }
  return (
    <div>
      <button onClick={aceptar}>ACEPTAR</button>
    </div>
  )
}