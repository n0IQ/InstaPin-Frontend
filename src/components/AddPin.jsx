import React, { useState, useEffect, useRef } from "react";
import jwt from "jsonwebtoken";
import { useMutation } from "@apollo/client";
import { ADD_PIN } from "../mutations/pinMutation";
import { Box, TextField, Button } from "@mui/material";
import { GET_PINS } from "../queries/pinQueries";

const UploadPinForm = () => {
  const token = localStorage.getItem("token");
  const decodedToken = jwt.decode(token);
  const userId = decodedToken.id;

  // cloudinary upload widget
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    // console.log(cloudinaryRef.current);

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        multiple: false,
        resourceType: "image",
      },
      function (err, res) {
        if (!err && res && res.event === "success") {
          setImageFile(res.info.url);
          setImageUrl(res.info.url);
          // console.log(res.info);
        }
      }
    );
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [link, setLink] = useState("");

  const [createPin] = useMutation(ADD_PIN, {
    variables: {
      title,
      imageUrl,
      description,
      link,
      userId,
    },

    update(cache, { data: { createPin } }) {
      const { pins } = cache.readQuery({ query: GET_PINS });
      cache.writeQuery({
        query: GET_PINS,
        data: { pins: [...pins, createPin] },
      });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formData = new FormData();
    const data = new FormData(event.currentTarget);

    setTitle(data.get("title"));
    setDescription(data.get("description"));
    setImageFile(data.get("imageFile"));
    setLink(data.get("link"));

    createPin({ variables: title, description, imageFile, link })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setTitle("");
    setDescription("");
    setImageFile(null);
    setImageUrl("");
    setLink("");
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "7rem auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
        p: 2,
        borderRadius: 2,
      }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          label="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          fullWidth
          margin="normal"
          rows={4}
        />
        <Button
          onClick={() => widgetRef.current.open()}
          sx={{ marginTop: 2, marginRight: 2 }}>
          Choose File
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!title || !imageFile}
          sx={{ marginTop: 2 }}>
          Upload
        </Button>
      </form>
    </Box>
  );
};

export default UploadPinForm;
