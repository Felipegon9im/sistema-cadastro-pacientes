// Importar funções necessárias do Firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database'; // Importar o módulo do Firebase Realtime Database

const firebaseConfig = {
    apiKey: "AIzaSyDiRl5kaIQ7sGVEXcbmMCLm82mLd6yfitI",
    authDomain: "app-pacientes-74d06.firebaseapp.com",
    projectId: "app-pacientes-74d06",
    storageBucket: "app-pacientes-74d06.appspot.com",
    messagingSenderId: "771041115460",
    appId: "1:771041115460:web:46d8c56324cda27919ab11",
    measurementId: "G-PM2JG7GN6E"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Inicializa o Realtime Database

export default database; // Exporta a instância do banco de dados
