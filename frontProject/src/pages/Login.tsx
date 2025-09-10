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
      const res = await fetch("http://localhost:3003/api/user");
      if (!res) {
        setMessage("no pass");
      }
      const data = await res.json();
      console.log("data from server:", data);
      const user = data.find(
        (user: { name: string; password: string }) =>
          user.name === name && user.password === password
      );
      if (user) {
        setMessage("Login successful!");
        localStorage.setItem("isLoggedIn", "true");

        setTimeout(() => {
          window.location.reload();
        }, 100);
        nav("/");
      } else {
        setMessage("Invalid name or password.");
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
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">login</button>
          </form>
        </div>
        <p className="textpost">{message}</p>
      </main>
    </>
  );
}
