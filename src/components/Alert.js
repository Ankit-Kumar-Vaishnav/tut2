import React from 'react'

export default function Alert(props) {
  const capitalized = (text)=>{
    let lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible" role="alert`}>
  <strong>{capitalized(props.alert.type)}</strong> {props.alert.msg}
</div>
  )
}
