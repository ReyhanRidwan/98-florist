import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import aiStudioConfig from './firebase-applet-config.json';

const app = initializeApp(aiStudioConfig);
const db = getFirestore(app, aiStudioConfig.firestoreDatabaseId);

async function test() {
  try {
    console.log("Writing to database...");
    const docRef = await addDoc(collection(db, 'portfolio'), {
      title: 'Test',
      category: 'Test',
      image: 'test',
      createdAt: serverTimestamp()
    });
    console.log("Write success! ID:", docRef.id);
  } catch (e) {
    console.error("Write failed:", e);
  }
}
test();
