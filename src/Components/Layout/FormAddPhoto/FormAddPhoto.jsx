import { React, useState} from "react";
import axios from "axios";
import { TextField } from "@mui/material";

export const FormAddPhoto = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setFiles] = useState(null);
  let formData = new FormData();
  const sendDates = (e) => {
    e.preventDefault();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    axios
      .post("http://localhost:5050/api/photos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={sendDates}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={title}
      />
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={description}
      />
      <input
        type="file"
        onChange={e => setFiles(e.target.files[0])}
      />
      <button type="submit">Add</button>
    </form>
  );
};
