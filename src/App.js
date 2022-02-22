import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Router from "./routes";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { userAdded } from "./services/redux/userReducer";

function App() {
  const dispatch = useDispatch();
  // const [userData, setUserData] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(userAdded({
            id: snapShot.id,
            ...snapShot.data()
          }))
        });
      } else {
        dispatch(userAdded(userAuth))
      }
    })
  })

  return (
    <>
      <Header/>
      <Router />
    </>
  );
}

export default App;
