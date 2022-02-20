import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBSbPsoWTiKjpJnQKEudovDIRCHtYKiGBQ",
  authDomain: "shopping-f1817.firebaseapp.com",
  projectId: "shopping-f1817",
  storageBucket: "shopping-f1817.appspot.com",
  messagingSenderId: "542630691210",
  appId: "1:542630691210:web:9f2ac06b690bf6a1584873",
  measurementId: "G-9Z3WQR85WZ"
};

export const createUserProfileDocument = async (userAuth , additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);  

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName , email } = userAuth;
    const createdAt = new Date();


    try{
      await userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log("error creating user" , error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;