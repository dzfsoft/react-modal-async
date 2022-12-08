import React from 'react'
import ReactDOM from 'react-dom/client'
import { Modal } from './Modal'

export const Confirm = () => {
  return new Promise((resolve, reject) => {
    mostrarModal(resolve)
  }
  )
}

const mostrarModal = (resolve) => {
  const body = document.getElementsByTagName('body')[0]
  const div = document.createElement('div')
  div.setAttribute('id', 'modal')
  body.appendChild(div)
  const modalContainer = ReactDOM.createRoot(div)
  modalContainer.render(<Modal resolve={resolve} />)
}