export async function getServerSideProps(context) {
  const { params } = context;
  
  const userResponse = await fetch(
    `https://randomuser.me/api/?results=20`
  );
  const userData = await userResponse.json();

  
  return {
    props: {
        params,
      user: userData,
       
    },
  };
}

export default function Post({ params, user }) {
    console.log(user)
  return (
    <div>
      <h1>{user.results[params.postId].gender}</h1>
      <div >
        <p>{user.results[params.postId].name.first}</p>
        <p>{user.results[params.postId].email}</p>
        <p>{user.results[params.postId].dob.age}</p>
        <p>{user.results[params.postId].location.city}</p>
      </div>
    </div>
  );
}