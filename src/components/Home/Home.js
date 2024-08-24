import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const signOutUser = async () => {
      try {
        await signOut(auth);
        navigate("/");
      } catch (error) {
        console.log("Error signing out: ", error);
      }
    };
    signOutUser();
  }, [navigate]);
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
