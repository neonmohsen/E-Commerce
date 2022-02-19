import React , {useState , useEffect} from "react";
import Header from "./components/header/header";
import Router from "./routes";
import { auth } from "./firebase/firebase.utils";

function App() {

  const [userData , setUserData] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUserData(user)
    })
    console.log(userData);
  })

  return (
    <>
      <Header userData = {userData}/>
      <Router />
    </>
  );
}

export default App;
