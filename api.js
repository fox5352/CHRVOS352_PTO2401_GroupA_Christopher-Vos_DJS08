import { app } from "./firebase"
import { getFirestore, collection, getDocs, doc, getDoc, where, query} from "firebase/firestore/lite";

const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans");

export async function getVans(id) {

    if (id !== undefined) return getVan(id);

    const snapshot = await getDocs(vansCollectionRef)

    const vans = snapshot.docs.map(doc => {
        const data = doc.data();

        return {
            id: doc.id,
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            type: data.type,
            hostId: data.hostId
        }
    })

    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))

    const snapshot = await getDocs(q);

    const vans = snapshot.docs.map(doc => {
        const data = doc.data();

        return {
            id: doc.id,
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            type: data.type,
            hostId: data.hostId
        }
    })

    return vans
}


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
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