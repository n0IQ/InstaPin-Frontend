import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import jwt from "jsonwebtoken";
import { useParams } from "react-router-dom";
import { GET_PIN } from "../queries/pinQueries";
import { SAVE_PIN } from "../mutations/pinMutation";

export default function Pin() {
  const pinId = useParams().id;
  const token = localStorage.getItem("token");
  const decodedToken = jwt.decode(token);
  const userId = decodedToken.id;

  const { data, loading, error } = useQuery(GET_PIN, {
    variables: { id: pinId },
  });

  const [savePin] = useMutation(SAVE_PIN, {
    variables: {
      pinId,
      userId,
    },
  });

  const [isSaved, setIsSaved] = useState(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const handleSave = () => {
    savePin(pinId, userId)
      .then(() => {
        setIsSaved(true);

        setTimeout(() => {
          setIsSaved(false);
        }, 2000);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <>
      {!loading && !error && (
        <div className="pin-card-container">
          <div className="pin-card">
            <img src={data.pin.imageUrl} alt={data.pin.title} />
            <div className="card-content">
              <h3>{data.pin.title}</h3>
              <p>{data.pin.description}</p>
              {data.pin.link && (
                <a
                  href={data.pin.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  {data.pin.link}
                </a>
              )}
              <p>Created by {data.pin.user.userName}</p>
              <div style={{ textAlign: "right" }}>
                <button className="save-button" onClick={handleSave}>
                  Save
                </button>
                {isSaved && (
                  <p className="save-message" style={{ display: "block" }}>
                    Pin saved!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
