import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import SignIn from "./components/SignIn";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import Dashboard from "./components/Dashboard";
import AddForm from "./components/AddForm";
import { Navigate } from "react-router-dom";
import NoAccess from "./components/NoAccess";
import Map from "./components/MapPage";

//function

function App() {
  // eslint-disable-next-line no-unused-vars
  const adminRef = collection(db, "Admin-Uid");
  const [{ user }, dispatch] = useStateValue();
  const [isAdmin, setIsAdmin] = useState(false);

  

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "set_user",
          user: authUser,
        });

        getDocs(adminRef).then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.data().uid === authUser.uid) {
              setIsAdmin(true);
            }
          });
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
        <Route path="/signin" element={
          user ? (
            <Navigate to="/" replace />
          ) : (
            <SignIn />
          )
        } />

        {/* Private paths */}
        <Route
          path="/dashboard"
          element={
            user ? (
              isAdmin ? (
                <>
                  <Navbar />
                  <Dashboard />
                </>
              ) : (
                <NoAccess />
              )
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />
        <Route 
          path="/addform" 
          element={
            user ? (
              isAdmin ? (
                <>
                  <Navbar />
                  <AddForm />
                </>
              ) : (
                <NoAccess />
              )
            ) : (
              <Navigate to="/signin" replace />
            )
          } 
        />
        <Route 
          path="/collectionmap"
          element={
            user ? (
              isAdmin ? (
                <>
                  <Navbar />
                  <Map />
                </>
              ) : (
                <NoAccess />
              )
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        
        />
        <Route
          path="*"
          element={
            <>
              <NoAccess />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
