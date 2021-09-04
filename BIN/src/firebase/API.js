import firebase from 'firebase/firebase.js';
import 'firebase/firebase-firestore';
//import 'firebase/analytics';
import firebaseConfig from './firebaseConfig.js';
//let firebase = require('https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js');
//import * as firebase from 'firebase/app';
//const firebase = require("firebase");

//require('https://www.gstatic.com/firebasejs/4.2.0/firebase-firestore.js');
//import 'firebase/firebase-firestore';
//require("firebase/firestore");
//import '@firebase/firestore/dist/esm/index';

//import { initializeApp } from "firebase/app";
//import * as firebase from 'firebase/app';

//SITE COM SOLUÇÕES:
//https://stackoverflow.com/questions/46636255/firebase-firestore-is-not-a-function-when-trying-to-initialize-cloud-firestore
//https://stackoverflow.com/questions/26293049/specify-path-to-node-modules-in-package-json

//const firebaseApp = firebase.initializeApp(firebaseConfig);//inicializando a aplicação
firebase.initializeApp(firebaseConfig);
//firebase.firestore();
//firebase.analytics();
//const analytics = getAnalytics(app);

const db = firebase.firestore();//utilizando o firestore


//FUNÇÕES QUE IREI UTILIZAR PARA ACESSAR A API DO FIREBASE-FIRESTORE
const Api = {

    listPlayers: async function(){
       return await db.collection("jogadores")
          //.doc("wsLyOGitdzf93myhc3Ck")
             .get()
                .then( (querySnapshot) => { 
                          let list = [];

                          querySnapshot.forEach( function(doc){  
                            // console.log(`${doc.id} => ${doc.data().nome}`);
                              const val ={
                                 nome: doc.data().nome,
                                 tempoJogoLaboratorio: doc.data().tempoJogoLaboratorio,
                                 tempoJogoMoinho: doc.data().tempoJogoMoinho,
                                 tempoJogoTorreRelogio: doc.data().tempoJogoTorreRelogio,
                                 tempoTotal: doc.data().tempoTotal
                              };

                              list.push(val);
                           //   console.log("Dados recebidos: ");
                            //  console.dir(JSON.stringify(doc.data(), null, 4));
                         });

                         return list;
                         
                }).catch( (error)=>console.log("Erro ao buscar os dados... "+error) );
    },


    insertPlayer: async function(playerData){
        await db.collection("jogadores")
             .add(playerData)
                    .then( (docRef)=> console.log("Player cadastrado com sucesso!! /// ID do seu documento: "+docRef.id) )
                            .catch( (error)=> console.log("houve um erro ao tentar inserir o jogador no banco de dados!! TYPE ERROR: "+error) );
    }
}

export default Api;

/* 
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
*/


//COMANDOS COM O FIRESTORE:
//https://github.com/firebase/snippets-web/blob/eee411f0580eb061e4c6eeabf9b4fd8aac9b49ab/firestore/test.firestore.js#L155-L167



//https://firebase.google.com/docs/firestore/quickstart#web-v8_2
//https://www.bing.com/videos/search?q=bonieky+react&&view=detail&mid=426599A28A601EEE9F8A426599A28A601EEE9F8A&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dbonieky%2Breact%26FORM%3DHDRSC3 (bonieky)
//codigo fonte TV





/* //ANTIGAS REGRAS DE ACESSO AO BANCO

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2021, 9, 28);
    }
  }
}

*/