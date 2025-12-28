const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <input
        placeholder="Search movies..."
        style={{
          ...styles.search,
          left: window.innerWidth <= 768 ? "40px": "200px",
        }}
      />
      <span style={styles.user}>👤 John</span>
    </div>
  );
};

const styles = {
  navbar: {
    height: "60px",
    background: "#0b0f19",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    borderBottom: "1px solid #1f2937",
  },
  search: {
    position: "relative",
    background: "#11162a",
    border: "none",
    padding: "8px 12px",
    color: "#fff",
    outline: "none",
  },
  user: {
    color: "#9ca3af",
  },
};

export default Navbar;
