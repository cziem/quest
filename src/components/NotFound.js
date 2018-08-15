import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

const NotFound = () => (
  <div style={styles.container}>
    <h3>404 Error. Page not found!</h3>
    <div style={styles.wakanda} className="wakanda">
      <Link to="/">
        Let's Go <IoIosHome style={styles.icons} />
      </Link>
    </div>
  </div>
);

export default NotFound;

const styles = {
  container: {
    width: "50vw",
    background: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.2rem",
    color: "#fdfdfd"
  },
  wakanda: {
    padding: ".5rem",
    cursor: "pointer",
    fontSize: "2rem",
    borderRadius: "0.2rem",
    border: "1px solid #ed5a51",
    width: "15rem",
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#9cbedb",
    transition: '0.2s ease'
  },
  icons: {
    marginBottom: "-0.2rem"
  }
};
