import Link from 'next/link'


export default function Persons ({persons}) {
    return(
        <div>
        {persons.map(person => {
            return(
                <Link href={`/post/${person.email}`} passHref key={person.email}>
                <h1>person.email</h1>
                </Link>
                )
            }
            )
        }      
        </div>
        )
}



export async function getStaticProps() {
    const res = await fetch(`https://randomuser.me/api/?results=20`);
    const data = await res.json()

    return {
        props: {
            persons : data
        }
    }
}