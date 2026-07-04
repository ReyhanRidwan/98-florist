import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { PROJECTS } from './src/data/config';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function seed() {
  console.log("Seeding...");
  const settingsDocRef = doc(db, 'settings', 'seeding');
  await deleteDoc(settingsDocRef);
  console.log("Deleted seeding doc to trigger re-seed if needed, or we can just seed now");
  for (const project of PROJECTS) {
    try {
      await addDoc(collection(db, 'portfolio'), {
        title: project.title,
        category: project.category,
        image: project.image,
        aspect: project.aspect || null,
        createdAt: serverTimestamp()
      });
      console.log(`Added ${project.title}`);
    } catch (e) {
      console.error(e);
    }
  }
  console.log("Done");
}

seed();
