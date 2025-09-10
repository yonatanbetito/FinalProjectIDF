import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3003/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await res.json();
      if (result.success) {
        setMessage("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
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
                name="email"
                placeholder="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
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
