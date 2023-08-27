import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCSkCc2b0h4n1C4ILkrhof71SSETh-2D-A",
  authDomain: "netflix-clone-6622.firebaseapp.com",
  projectId: "netflix-clone-6622",
  storageBucket: "netflix-clone-6622.appspot.com",
  messagingSenderId: "788212843494",
  appId: "1:788212843494:web:40a32cbdbcdfef1a4b4c27",
  measurementId: "G-XV7RPKDBKN"
};

const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

export default app;
