import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

function App() {
  const [message, setMessage] = useState("Loading...");
  const [users, setUsers] = useState<User[]>([]);

  // Fetch hello message
  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error: " + err.message));
  }, []);

  // Fetch users
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{message}</h1>
      <h2>Users:</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
