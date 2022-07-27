
import FetchApi from '../components/FetchApi'

export async function getStaticProps() {
  const [res, img] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`),
    fetch(`https://picsum.photos/v2/list?page=2&limit=20`)
  ]);
  const [data, images] = await Promise.all([
    res.json(),
    img.json()
  ]);

  return {
      props: { 
          data,
          images
      }
  }

}

export default function Persons ({data,images}) {
    return(
        <div>
          <FetchApi data={data} images={images}/>

              
        </div>
        )
}


