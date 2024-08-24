import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeText}>Welcome to the portal</div>
      <Link to="/login" className={styles.loginLink}>
        Click here to login
      </Link>
    </div>
  );
};

export default Home;
