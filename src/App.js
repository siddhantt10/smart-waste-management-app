import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import SignIn from "./components/SignIn";
import { useStateValue } from "./StateProvider";
import { auth } from "./config/firebase";
import Dashboard from "./components/Dashboard";
import AddForm from "./components/AddForm";

//function

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "set_user",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "set_User",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <>
              {user ? <Navbar /> : <div></div>}
              {user ? <Dashboard /> : <SignIn />}
            </>
          }
        />
        <Route 
          path="/addform" 
          element={
            <>
              {user ? <Navbar /> : <div></div>}
              {user ? <AddForm /> : <SignIn />}
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
