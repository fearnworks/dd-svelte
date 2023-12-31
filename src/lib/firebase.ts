import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";

const firebaseConfig = {
  apiKey: "AIzaSyBEy3w6jU3D7VnzRZoe2GXlmfjA_WrHDFg",
  authDomain: "character-builder-5bb73.firebaseapp.com",
  projectId: "character-builder-5bb73",
  storageBucket: "character-builder-5bb73.appspot.com",
  messagingSenderId: "1044445617403",
  appId: "1:1044445617403:web:0782d4d2d10251fedde45e",
  measurementId: "G-WQM6QLCEWP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();


/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();





/**
 * @param  {string} path document path or reference
 * @param  {any} startWith optional default data
 * @returns a store with realtime updates on document data
 */
export function docStore<T>(
  path: string,
) {
  let unsubscribe: () => void;

  const docRef = doc(db, path);

  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
  };
}

interface UserData {
  username: string;
  bio: string;
  photoURL: string;
  published: boolean;
  links: any[];
  characters: string[];
  admin: boolean;
}

export const userData: Readable<UserData | null> = derived(user, ($user, set) => { 
  if ($user) {
    return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
  } else {
    set(null); 
  }
});  

// ################################### CHARACTER

/**
 * @returns a store with the character list
 */
interface CharacterData {
  uid:         string;
  name:       string;
  class:      string;
  race:       string;
  level:      number;
  bio:        string;
  background: string;
}

export const characterData: Readable<CharacterData | null> = derived(user, ($character, set) => { 
  if ($character) {
    return docStore<CharacterData>(`characters/${$character.uid}`).subscribe(set);
  } else {
    set(null); 
  }
});  