import {
  Card,
  CardContent,
  Typography,
  Container,
} from '@mui/material';

export async function getServerSideProps(context) {
  const {params} = context

  
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}?userId=1`);
  const userData = await userResponse.json();

  
  return {
    props: {
      user: userData,
       
    },
  };
}

export default function Post({ user }) {
    console.log(user)
  return (
    <div>
      <Container
      sx={{
        display: 'block',
        margin:'10% , 0%',
        // border:'solid black 2px',
        alignItems:'center',
        background:'steelblue',
        color:'white'
      }}>
        
      <h1 key={user.id}>Body: {user.title}</h1>
      
      </Container>
      
    </div>
  );
}