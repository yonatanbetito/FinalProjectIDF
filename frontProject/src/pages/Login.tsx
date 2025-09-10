import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3003/api/users");
      const data = await res.json();
      const user = data.find(
        (user: { name: string; password: string }) => user.name === name && user.password === password
      );
      if (user) {
        setMessage("Login successful!");
        nav("/frontProject/src/compons/Home.tsx");
      } else {
        setMessage("Invalid name or password.");
        <button><Link to="/frontProject/src/pages/register.tsx">Go to register</Link></button>
      }
    } catch (err) {
      setMessage("Network error: " + err);
    }
  }
  return (
    <>
    <main>
    <div className="card">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
      </div>
      <p className="textpost">{message}</p></main>
    </>
  );
}
