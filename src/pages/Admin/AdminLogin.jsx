"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./admin.css"

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!credentials.email || !credentials.password) {
      setError("Please enter both email and password")
      return
    }

    // Mock authentication - replace with actual API call later
    if (credentials.email === "admin@example.com" && credentials.password === "admin123") {
      // Store authentication token/status in localStorage or sessionStorage
      localStorage.setItem(
        "adminAuth",
        JSON.stringify({
          isAuthenticated: true,
          user: { email: credentials.email, role: "admin" },
        }),
      )

      // Redirect to admin dashboard
      navigate("/admin/dashboard")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h1>Admin Login</h1>
          <p>Sign in to manage job postings</p>
        </div>

        {error && <div className="admin-login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="admin-login-button">
            Sign In
          </button>
        </form>

        <div className="admin-login-footer">
          <a href="#" className="admin-forgot-password">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
