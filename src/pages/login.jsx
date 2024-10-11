import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../api";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setStatus("submitting");
      await loginUser({
        id: "123",
        email: "b@b.com",
        password: "p123",
        name: "Bob",
      });

      localStorage.setItem("loggedin", true);
      navigate(state?.url ? state.url : "/host", { replace: true });

      setError(null);
    } catch (error) {
      console.log("failed to login :", error);
      setError(error);
    } finally {
      setStatus("idle");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,

      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {state?.message && <h3 className="login-first">{state.message}</h3>}
      <h1>Sign in to your account</h1>
      {error?.message && <h3 className="login-first">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
