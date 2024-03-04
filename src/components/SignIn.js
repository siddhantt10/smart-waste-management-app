import "./SignIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";


function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signIn">
      <div className="signIn-logo">
        <Link to="/">
          <img className="signIn-logo-logo" src="logo-lte.png" alt="Logo"></img>
        </Link>
      </div>
      <div className="signIn-form">
        <h1 className="signIn-head">Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            className="signIn-form-input"
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            className="signIn-form-input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </form>
        <button type="submit" onClick={login} className="signIn-button">
          Sign In
        </button>
        <p className="signIn-con">
          By continuing, you agree to OUR Conditions of Use and Privacy Notice.
        </p>

        <button onClick={register} className="signIn-button">
          Create your new Account
        </button>
        <p className="signIn-or">or</p>

        <button className="signIn-google-button" onClick={signInWithGoogle}>
          <FontAwesomeIcon icon={faGoogle} className="signIn-google-icon" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default SignIn;
