/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');


// نفس القيم اللي عندك بالـ .env
firebase.initializeApp({
  apiKey: "AIzaSyCAoCQE8m1fezlQr7pPSI7xCPE6tahxpdI",
  authDomain: "syrian-board.firebaseapp.com",
  projectId: "syrian-board",
  storageBucket: "syrian-board.appspot.com", // ✅ انتبه هون تكون صح
  messagingSenderId: "451160062213",
  appId: "1:451160062213:web:8af5885df5702b33fb9f6c",
});

const messaging = firebase.messaging();

// optional: استقبال الإشعارات بالخلفية
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const { title, body } = payload.notification;
  console.log(payload)
  self.registration.showNotification(title, {
    body,
    icon: "/logo192.png",
  });
});
