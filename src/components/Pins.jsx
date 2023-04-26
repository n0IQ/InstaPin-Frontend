import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PINS } from "../queries/pinQueries";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Pins() {
  const { data, loading, error } = useQuery(GET_PINS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

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
        {data.pins.map((pin) => (
          <ImageListItem key={pin.id}>
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
