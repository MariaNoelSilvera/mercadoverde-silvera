import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";
import { products } from "../utils/MockData";

export const importProducts = async () => {
    const productsCollection = collection(db, 'products');

    products.forEach(async ({ name, description, category, price, stock, image }) => {
        try {
            const docRef = await addDoc(productsCollection, {
                name,
                description,
                price,
                stock,
                image,
                category
            });
            console.log(docRef);
            console.log(docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    });
};
