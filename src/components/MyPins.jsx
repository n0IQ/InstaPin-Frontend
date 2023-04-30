import React from "react";
import jwt from "jsonwebtoken";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useQuery } from "@apollo/client";
import { GET_MY_PINS } from "../queries/pinQueries";

export default function MyPins() {
  const token = localStorage.getItem("token");
  const decodedToken = jwt.decode(token);
  const userId = decodedToken.id;

  const { data, loading, error } = useQuery(GET_MY_PINS, {
    variables: { id: userId },
  });

  //   console.log("data", data);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;

  return (
    <Box
      sx={{
        margin: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <ImageList
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "16px",
          ":hover": { cursor: "pointer" },
        }}
        variant="masonry"
        cols={3}
        gap={8}>
        {data.myPins.map((pin) => (
          <ImageListItem key={pin.imageUrl}>
            <img
              src={`${pin.imageUrl}?w=248&fit=crop&auto=format`}
              srcSet={`${pin.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={pin.title}
              loading="lazy"
              style={{ borderRadius: "16px" }}
              onClick={() => (window.location.href = `/pins/${pin.id}`)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
