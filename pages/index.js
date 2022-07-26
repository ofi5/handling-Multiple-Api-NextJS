
import FetchApi from '../components/FetchApi'

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
  const data = await res.json()

  return {
      props: { 
          data,
      }
  }

}

export default function Persons ({data}) {
    return(
        <div>
          <FetchApi data={data} />

              
        </div>
        )
}


