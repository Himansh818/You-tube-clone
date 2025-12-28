import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import MovieCard from "../../components/MovieCard";

const Dashboard = () => {
  return (
    <div style={styles.app}>
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <div style={styles.main}>
        <Navbar />

        <div style={styles.content}>
          <h2>Trending Movies</h2>

          <div style={styles.grid}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: "flex",
    minHeight: "100vh",
    background: "#0b0f19",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    marginLeft: window.innerWidth > 900 ? "220px" : "0px", // 👈 sidebar ke liye space
  },
  content: {
    padding: "20px",
    flex: 1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns:
      window.innerWidth <= 900
        ? "repeat(auto-fit, minmax(180px, 1fr))"
        : "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
    width: "100%",
    boxSizing: "border-box",
    padding: "0 16px",
  },
};

export default Dashboard;
