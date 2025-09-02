import { getMessaging, getToken } from "firebase/messaging";
import { app } from "./firebaseConfig";

const messaging = getMessaging(app);

export const requestForToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.warn("Notifications permission not granted");
      return null;
    }

    const currentToken = await getToken(messaging, {
      vapidKey: "BOSHqwl3mFMYwUqpdh9dKluMLzsY87OHGLfrqUsRWgaCXv__H3OoRTM0XW9tV4nDUK_RsdSibJPbXaOHJ9muTnE",
    });

    if (currentToken) {
      console.log("FCM Token:", currentToken);
      return currentToken;
    } else {
      console.warn("No registration token available. Request permission to generate one.");
      return null;
    }
  } catch (err) {
    console.error("FCM token error:", err);
    return null;
  }
};
