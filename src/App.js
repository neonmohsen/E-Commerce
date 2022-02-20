import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Router from "./routes";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {

  const [userData, setUserData] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setUserData({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        setUserData(userAuth)
      }
    })
  })

  return (
    <>
      <Header userData={userData} />
      <Router />
    </>
  );
}

export default App;
