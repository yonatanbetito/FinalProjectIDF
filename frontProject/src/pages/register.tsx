import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const newUser = { name, email, password };
      const res = await fetch("http://localhost:3003/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const result = await res.json();
      if (result.message === "user already exists") {
        setMessage("user exists");
      } else if (result.message === "user created") {
        setMessage("register successfully.");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        setTimeout(() => {
          window.location.reload();
        }, 100);
        navigate("/");
      } else {
        setMessage(result.message || "Unknown error");
      }
    } catch (err) {
      setMessage("Network error: " + err);
    }
  }

  return (
    <main>
      <div className="card">
        <h1>Sing up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="user"
              name="user"
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sing up</button>
        </form>
        <p>{message}</p>
      </div>
    </main>
  );
}
