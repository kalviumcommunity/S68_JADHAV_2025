import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/route";

function Landpage() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/read`)
      .then((res) => res.json())
      .then((data) => setEntities(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <h1>S68_Jadhav2025</h1>
      <p>AI-Powered Resume Builder - Project Title: Resumely</p>
      <h2>Entities from Database</h2>
      <ul>
        {entities.length > 0 ? (
          entities.map((entity) => (
            <li key={entity._id}>
              <strong>{entity.name}</strong>: {entity.description}
            </li>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </>
  );
}

export default Landpage;
