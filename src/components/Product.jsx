import React from 'react'

export default function Product({id , title , image , category , price , rate}) {
  return (
    <tr key={id}>
        <td><img src={image} alt='' style={{ width: "100px", height: "100px" }}/></td>
        <td>{title}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{rate}</td>
    </tr>
  )
}
