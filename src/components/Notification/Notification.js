import React from 'react'
import Card from '../UI/Card'

const Notification = (props) => {
  return (
    <Card>{props.message}</Card>
  )
}

export default Notification