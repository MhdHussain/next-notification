import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBivd0UUZmQqu3ZlOcpwqWaOl2BJK3lwU",
  authDomain: "nextjs-notification-51cb0.firebaseapp.com",
  projectId: "nextjs-notification-51cb0",
  storageBucket: "nextjs-notification-51cb0.firebasestorage.app",
  messagingSenderId: "636915540044",
  appId: "1:636915540044:web:9f520f37016cae05a194e9",
  measurementId: "G-P8BHP5MQG1"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };
