// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbL3WJHbkKAzZwAB4Oxdki1cYQSjIOBV0",
  authDomain: "zidny-clothing-db.firebaseapp.com",
  projectId: "zidny-clothing-db",
  storageBucket: "zidny-clothing-db.appspot.com",
  messagingSenderId: "922525458997",
  appId: "1:922525458997:web:2e70bea294b5ea41e9477c",
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error while creating the user", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  if (!callback) return;
  return onAuthStateChanged(auth, callback);
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Done: addCollectionAndDocuments");
};

export const getCategoriesAndDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    // return [...acc, { title, items }];
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoriesMap;
};
