import React from 'react'
import Link from 'next/link'




 const FetchApi = ({data}) => {
    console.log({data})
        
  return (
    <div>
    <h1>BRANDS</h1>
    {
      data && data.map(item => (

        
        

        <Link href={`/posts/${item.id}`} passHref key={item.id}>
      
      <h3 key={item.id}>{item.title}</h3>
      </Link>
      ))
    }      
    </div>
  )
}
export default FetchApi
