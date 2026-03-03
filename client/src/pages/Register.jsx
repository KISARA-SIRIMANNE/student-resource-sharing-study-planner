import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div style={styles.container}>
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <h2>Create Account</h2>
        <p style={{ color: "#aaa", marginBottom: "30px" }}>
          Sign up to get started
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <p style={{ marginTop: "20px", color: "#aaa" }}>
          Already have an account?
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <h1>Join the</h1>
        <h1 style={{ fontWeight: "bold" }}>Student Portal</h1>
        <p style={{ marginTop: "20px", opacity: 0.8 }}>
          Organize your study life efficiently
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial",
  },
  left: {
    flex: 1,
    background: "#111",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #444",
    background: "#222",
    color: "#fff",
  },
  button: {
    padding: "10px",
    background: "#8b5cf6",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  right: {
    flex: 1,
    background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Register;