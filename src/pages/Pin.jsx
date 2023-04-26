import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PIN } from "../queries/pinQueries";

export default function Pin() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PIN, { variables: { id } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  console.log(data);

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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
