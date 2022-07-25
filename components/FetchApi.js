import React from 'react'




 const FetchApi = ({data}) => {
    console.log({data})    
  return (
    <div>
    <h1>BRANDS</h1>
    {
      data && data.map(item => (<h3 key={item.id}>{item.equipment} {item.brand}</h3>))
    }      
    </div>
  )
}
export default FetchApi
