import React, { useState, useEffect, useRef } from "react";
import jwt from "jsonwebtoken";
import { useMutation } from "@apollo/client";
import { ADD_PIN } from "../mutations/pinMutation";
import { Box, TextField, Button } from "@mui/material";

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

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [imageFile, setImageFile] = useState(null);
  let [imageUrl, setImageUrl] = useState("");
  let [link, setLink] = useState("");

  const [createPin] = useMutation(ADD_PIN, {
    variables: {
      title,
      imageUrl,
      description,
      link,
      userId,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("imageFile", imageFile);
    formData.append("link", link);

    createPin({ variables: formData })
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
