import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Card,
    CardContent,
    Typography,
    Container,
  } from '@mui/material';
import { boxSizing, margin, textAlign, width } from '@mui/system';





 const FetchApi = ({data, images}) => {
    

    const finalArray = (data, images) => data.map((x,i)=>[x,images[i]]);
        
       const finalData = finalArray(data,images)
        console.log(finalData)

        const myLoader = ({src}) => {
            return `https://picsum.photos/id/${src}`;
            
          };
        
        
  return (
  <div>
    
    <h1 style ={{textAlign:'center' /*,border:'solid 2px green'*/}}> Handling Mulitple Api's</h1>
    <Container
      sx={{
        display: 'block',
        margin:'10% , 0%',
        // border:'solid black 2px',
        alignItems:'center',
      }}
    >
    {
      finalData.map((item) => (
        <Card
        elevation={0}
        sx={{
          maxWidth: '100%',
          textAlign:'center',
          cursor: 'pointer',
          // border:"solid 3px blue",
          background:'steelblue',
        color:'white',
          margin:'0% 20%',
          marginBottom:'5%',
          borderRadius:'10px'
        }}
        
      >
    <CardContent>

         <Link href={`/posts/${item[0].id}`} passHref key={item[0].id}>

          <div key={item[0].id} style={{/*border:'solid 2px red',*/ width:'100%', display:'flex' }}>
           <Image 
              loader={myLoader}
              // border={"solid 2px green"}
              src={`/${item[1].id}/${item[1].width}/${item[1].height}.jpg`}
            
              width="120px"
              height="100px"

            />
            <Typography fontWeight="bold" variant="body1" sx={{marginLeft:'30px'}}>
                      Title:{item[0].title} 
            </Typography>
          </div>
        </Link>       
    </CardContent>
    </Card> 
      
      ))
    }
    
    </Container>
    
    </div>
    
  )
}
export default FetchApi

//  state = [ "Andhra Pradesh",
// "Arunachal Pradesh",
// "Assam",
// "Bihar",
// "Chhattisgarh",
// "Goa",
// "Gujarat",
// "Haryana",
// "Himachal Pradesh",
// "Jammu and Kashmir",
// "Jharkhand",
// "Karnataka",
// "Kerala",
// "Madhya Pradesh",
// "Maharashtra",
// "Manipur",
// "Meghalaya",
// "Mizoram",
// "Nagaland",
// "Odisha",
// "Punjab",
// "Rajasthan",
// "Sikkim",
// "Tamil Nadu",
// "Telangana",
// "Tripura",
// "Uttarakhand",
// "Uttar Pradesh",
// "West Bengal",
// "Andaman and Nicobar Islands",
// "Chandigarh",
// "Dadra and Nagar Haveli",
// "Daman and Diu",
// "Delhi",
// "Lakshadweep",
// "Puducherry"]