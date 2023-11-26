// Firebase.js
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";
import { deleteDoc, doc, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJX65pa-UVsRoEA4Djq4yl9hGB0wzB-h4",
  authDomain: "film-37b51.firebaseapp.com",
  projectId: "film-37b51",
  storageBucket: "film-37b51.appspot.com",
  messagingSenderId: "512960938933",
  appId: "1:512960938933:web:1f76b34018f07715ed0ffc",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const db = getFirestore(app);
const moviesRef = collection(db, "movies");
export const dbSeries = getFirestore(app);

const seriesRef =collection (dbSeries, "series111");

export const useMoviesLister = () => {
  const [moviesi, setMoviesi] = useState([]);
  useEffect(() => {
    return onSnapshot(moviesRef, (snapshot) => {
      setMoviesi(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        })
      );
    });
  }, []);
  return moviesi;
};

export const removeFromDatabase = (id) => {
  try {
    deleteDoc(doc(db, "movies", id));
    console.log("Film başarıyla silindi:", id);
  } catch (error) {
    console.error("Film silinirken bir hata oluştu:", error);
  }
};
 export const addMovie = ({  titleg, descriptiong, imageUrlg }) => {
   console.log("Values:", titleg, descriptiong, imageUrlg);
   addDoc(moviesRef, {
    
     title: titleg,
     description: descriptiong,
     imageUrl: imageUrlg,
   });
 };


export const useSerisLister = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    return onSnapshot(seriesRef, (snapshot) => {
      setSeries(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        })
      );
    });
  }, []);
  return series;
};

export const addSerie = ({  titleg, descriptiong, imageUrlg }) => {
  
  addDoc(seriesRef, {
    
    title: titleg,
    description: descriptiong,
    imageUrl: imageUrlg,
  });
};

export const removeFromSerie = (id) => {
  try {
    deleteDoc(doc(dbSeries, "series111", id));
   
  } catch (error) {
    console.error("Film silinirken bir hata oluştu:", error);
  }
};
