import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={props.className} type={props.type}>{props.text}</button>
  )
}

export default Button