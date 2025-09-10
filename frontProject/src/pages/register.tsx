import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3003/api/users");
      const data = await res.json();
      const user = data.find((u: { email: string }) => u.email === email);
      if (user) {
        setMessage("user exists");
      } else {
        setMessage("register successfully.");
        const newUser = { name, email, password };
        await fetch("http://localhost:3003/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        nav("/frontProject/src/pages/Home.tsx");
      }
    } catch (err) {
      setMessage("Network error: " + err);
    }
  }
  

  return (
    <div>
      <h1>Sing up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="user" name="user" placeholder="username" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <input type="email" name="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sing up</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
