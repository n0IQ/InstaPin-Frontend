import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setLoggedIn(true);
  //     // Get the username from the token
  //   }
  // }, []);

  const handleSignUp = () => {
    // Redirect the user to the login page
    window.location.href = "/signup";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <nav
      style={{
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
      }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>
          <a
            style={{ color: "#fff", margin: 0, textDecoration: "none" }}
            href="/">
            InstaPin
          </a>
        </h3>
        {loggedIn && (
          <div style={{ display: "flex", marginLeft: "32rem" }}>
            <Link
              to="/myPins"
              style={{
                color: "#fff",
                textDecoration: "none",
                marginRight: "40px",
                fontSize: "1.5rem",
              }}>
              My Pins
            </Link>
            <Link
              to="/savedPins"
              style={{
                color: "#fff",
                textDecoration: "none",
                marginRight: "20px",
                fontSize: "1.5rem",
              }}>
              Saved Pins
            </Link>
          </div>
        )}
      </div>
      <div>
        {loggedIn ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                color: "#fff",
                margin: 0,
                marginRight: "30px",
                fontSize: "1.5rem",
              }}>
              {username}
            </p>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#333",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
              onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button
            style={{
              backgroundColor: "#fff",
              color: "#333",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
            onClick={handleSignUp}>
            SignUp
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;
