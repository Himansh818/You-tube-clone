import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (Mobile) */}
      <button
        style={{
          ...styles.menuBtn,
          display: window.innerWidth <= 900 ? "block" : "none",
        }}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          transform:
            window.innerWidth <= 768
              ? open ? "translateX(0)": "translateX(-100%)": "translateX(0)",
        }}
      >
        <h2 style={styles.logo}>MovieDash</h2>

        <nav style={styles.nav}>
          <NavLink to="/" style={styles.link} onClick={() => setOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink
            to="/watchlist"
            style={styles.link}
            onClick={() => setOpen(false)}
          >
            Watchlist
          </NavLink>
          <NavLink
            to="/profile"
            style={styles.link}
            onClick={() => setOpen(false)}
          >
            Profile
          </NavLink>
        </nav>
      </div>
    </>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#11162a",
    padding: "20px",
    position: "fixed",
    top: 0,
    left: 0,
    transition: "0.3s ease",
    zIndex: 1000,
  },
  logo: {
    color: "#2563eb",
    marginBottom: "40px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  link: {
    color: "#9ca3af",
    fontSize: "15px",
    textDecoration: "none",
  },
  menuBtn: {
    position: "fixed",
    top: "15px",
    left: "15px",
    fontSize: "22px",
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
    zIndex: 1100,
  },
};

export default Sidebar;
