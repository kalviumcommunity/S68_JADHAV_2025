import { useState, useEffect } from "react";

const AddEntity = () => {
  const [name, setName] = useState("");
  const [entities, setEntities] = useState([]);

  // Fetch existing entities on mount
  useEffect(() => {
    fetch("http://localhost:5000/entities")
      .then((res) => res.json())
      .then((data) => setEntities(data));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/entities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const newEntity = await response.json();
    setEntities([...entities, newEntity]); // Update list with new entity
    setName(""); // Reset input
  };

  return (
    <div>
      <h1>Add Entity</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <h2>Entity List</h2>
      <ul>
        {entities.map((entity) => (
          <li key={entity._id}>{entity.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddEntity;
