import { initializeApp } from "firebase/app";
import { getFireStore, collection, getDocs } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyD3CNS5Az_VUxAvl2pjE7GdUJMFnteSjFE",
  authDomain: "vanlife-9b805.firebaseapp.com",
  projectId: "vanlife-9b805",
  storageBucket: "vanlife-9b805.firebasestorage.app",
  messagingSenderId: "703416533744",
  appId: "1:703416533744:web:90faf442c41b2c66e7b835"
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.pam(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}


/* 
export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : '/api/vans'
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Fail to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
} */

export async function getHostVans(id) {
    const url = id ? `/api/host/${id}` : '/api/host/vans'
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Fail to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds){
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds)}
    )
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}