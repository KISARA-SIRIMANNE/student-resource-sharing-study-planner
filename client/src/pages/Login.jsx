import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="email" placeholder="Email" onChange={handleChange} style={styles.input}/>
          <input name="password" type="password" placeholder="Password" onChange={handleChange} style={styles.input}/>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>

      <div style={styles.right}>
        <h1>Welcome to</h1>
        <h1 style={{ fontWeight: "bold" }}>Student Portal</h1>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", height: "100vh", fontFamily: "Arial" },
  left: { flex: 1, background: "#111", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
  form: { display: "flex", flexDirection: "column", width: "300px" },
  input: { marginBottom: "15px", padding: "10px", borderRadius: "5px" },
  button: { padding: "10px", background: "#8b5cf6", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
  right: { flex: 1, background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }
};

export default Login;