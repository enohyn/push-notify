import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyCvR61jmbPc0P0RqjZPfm_JJAPvH1PgiW4",
    authDomain: "fir-pn-d8654.firebaseapp.com",
    projectId: "fir-pn-d8654",
    storageBucket: "fir-pn-d8654.appspot.com",
    messagingSenderId: "276861349763",
    appId: "1:276861349763:web:2334533bb6c096a7f710b6",
    measurementId: "G-1LE68GQ29R"
};
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);


export const getTokens = (setTokenFound) => {
    return getToken(messaging, { vapidKey: 'BFAbXTZhXf51NYg-c4P6ZHRYN4TagdgCF_zxCAsUZrM48m6cdD4SmM2eoNCia1RJtpQxOuEwiT0j8qsG-R2n7Ec' }).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);

        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });