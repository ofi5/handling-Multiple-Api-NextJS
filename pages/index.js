import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FetchApi from '../components/FetchApi'

export async function getStaticProps() {
  const res = await fetch(`https://random-data-api.com/api/appliance/random_appliance?size=20`)
  const data = await res.json()
  
  return {
      props: { 
          data, 
      }
  }

}
export default function Home({data}) {
  return (<div>
    
    <FetchApi data={data}/>
    </div>
   
      
  )
}
