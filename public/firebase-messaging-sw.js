importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyCvR61jmbPc0P0RqjZPfm_JJAPvH1PgiW4",
    authDomain: "fir-pn-d8654.firebaseapp.com",
    projectId: "fir-pn-d8654",
    storageBucket: "fir-pn-d8654.appspot.com",
    messagingSenderId: "276861349763",
    appId: "1:276861349763:web:2334533bb6c096a7f710b6",
    measurementId: "G-1LE68GQ29R"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});