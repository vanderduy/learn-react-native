import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAyYe9FEfYz3ocooD6I2LKKAgbXk2zYHIU",
    authDomain: "demofirebase-7d472.firebaseapp.com",
    databaseURL: "https://demofirebase-7d472.firebaseio.com",
    projectId: "demofirebase-7d472",
    storageBucket: "",
    messagingSenderId: "738063718194"
};
export default firebaseApp =   firebase.initializeApp(config);