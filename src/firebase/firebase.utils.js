import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDh-pR1yBwwB73saViYMf375rNqy6n4zsM",
    authDomain: "crown-e-commerce-project.firebaseapp.com",
    databaseURL: "https://crown-e-commerce-project.firebaseio.com",
    projectId: "crown-e-commerce-project",
    storageBucket: "crown-e-commerce-project.appspot.com",
    messagingSenderId: "220799030247",
    appId: "1:220799030247:web:350b9ed91fc7e600e06342",
    measurementId: "G-T8VP8N8FJ9"
  };


  export const createUserProfileDocument = async(userAuth,additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get()


      if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
        }catch(error){
          console.log('error creating user', error.message);
        }
      }
      return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();
      objectsToAdd.forEach(obj=>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
      });
      return await batch.commit()
  }


  export const convertCollectionsSnapshotToMap = (collections) =>{
    const transformedCollection = collections.docs.map(doc => {
      const {title,items}= doc.data();
       return{
         routeName:encodeURI(title.toLowerCase),
         id:doc.id,
         title,
         items
       }
    })
  }


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;