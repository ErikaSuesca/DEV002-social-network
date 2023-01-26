// eslint-disable-next-line import/no-unresolved
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
}
// eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { app } from './firebase.js';

const db = getFirestore(app);

export const savePublic = async (coment) => {
  try {
    const docRef = await addDoc(collection(db, 'Publication'), { coment });
    console.log(docRef);
  } catch (error) {
    console.log(error);
  }
};
// eslint-disable-next-line max-len
export const getPublication = () => getDocs(collection(db, 'Publication'));
