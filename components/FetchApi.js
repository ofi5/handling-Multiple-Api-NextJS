import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, Typography, Container } from "@mui/material";
import { boxSizing, margin, textAlign, width } from "@mui/system";

const FetchApi = ({ data, images }) => {
  const finalArray = (data, images) => data.map((x, i) => [x, images[i]]);

  const finalData = finalArray(data, images);
  console.log(finalData);

  const myLoader = ({ src }) => {
    return `https://picsum.photos/id/${src}`;
  };

  return (
    <div>
      <Typography sx={{ textAlign: "center" /*,border:'solid 2px green'*/ }}>
        
        Handling Mulitple ApiS
      </Typography>
      <Container
        sx={{
          display: "block",
          margin: "10% , 0%",
          // border:'solid black 2px',
          alignItems: "center",
        }}
      >
        {finalData.map((item) => (
          <Card
            elevation={0}
            key={item[1].id}
            sx={{
              maxWidth: "100%",
              textAlign: "center",
              cursor: "pointer",
              // border:"solid 3px blue",
              background: "steelblue",
              color: "white",
              margin: "0% 20%",
              marginBottom: "5%",
              borderRadius: "10px",
            }}
          >
            <CardContent key={item[1].id}>
              <Link href={`/posts/${item[0].id}`} passHref key={item[0].id}>
                <div
                  key={item[0].id}
                  style={{
                    /*border:'solid 2px red',*/ width: "100%",
                    display: "flex",
                  }}
                >
                  <Image
                    loader={myLoader}
                    key={item[0].id}
                    // border={"solid 2px green"}
                    src={`/${item[1].id}/${item[1].width}/${item[1].height}.jpg`}
                    width="120px"
                    height="100px"
                  />
                  <Typography
                    fontWeight="bold"
                    variant="body1"
                    sx={{ marginLeft: "30px" }}
                  >
                    Title:{item[0].title}
                  </Typography>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};
export default FetchApi;

