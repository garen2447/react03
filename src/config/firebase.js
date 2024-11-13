import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import Firebase Authentication

// Firebase configuration from your environment variables (make sure these are correct)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase with the configuration
const app = initializeApp(firebaseConfig);

// Get instances for Firestore and Firebase Authentication
const db = getFirestore(app);
const auth = getAuth(app);  // Firebase Authentication instance

// Log connection confirmation (for debugging purposes)
console.log("Firebase connected successfully");
console.log("Firestore instance:", db);
console.log("Auth instance:", auth);

// Export both Firestore and Auth to use throughout your app
export default { db, auth };
