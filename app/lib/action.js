"use server";




import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { connectDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";



export const addUser = async (formData) => {
    
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {

        connectDB();

        const img = "https://media.ed.edmunds-media.com/porsche/911/2024/oem/2024_porsche_911_coupe_st_fq_oem_1_1280.jpg";

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username, 
            email, 
            password : hashedPassword, 
            img,
            phone, 
            address, 
            isAdmin, 
            isActive
        });

        await newUser.save();
    } catch (err) {
        throw new Error(`Failed to add user ${err}`);
    }


    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}


export const deleteUser = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectDB();

        await User.findByIdAndDelete(id);

    } catch (err) {
        throw new Error(`Failed to delete user ${err}`);
    }

    revalidatePath("/dashboard/users");
}


export const updateUser = async (formData) => {
    
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {

        connectDB();

        const updateFields = {
            username, email, password, phone, address, isAdmin, isActive
        }

        Object.keys(updateFields).forEach(
            key => 
                (updateFields[key] === "" || undefined) && delete updateFields[key])
        
        await User.findByIdAndUpdate(id, updateFields);
        
    } catch (err) {
        throw new Error(`Failed to update user ${err}`);
    }


    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}


























export const addProduct = async (formData) => {

    const { title, description, price, stock, color, size, category } = Object.fromEntries(formData);

    try {
        connectDB();

        const newProduct = new Product({
            title,
            description,
            price,
            stock,
            color,
            size,
            category
        });

        await newProduct.save();

    } catch (err) {
        throw new Error(`Failed to add product ${err}`);
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}



export const deleteProduct = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectDB();

        await Product.findByIdAndDelete(id);

    } catch (err) {
        throw new Error(`Failed to delete product ${err}`);
    }

    revalidatePath("/dashboard/products");
}



export const updateProduct = async (formData) => {
    
    const { id, title, price, stock, color, size, category, description } = Object.fromEntries(formData);

    console.log("description : " + description);
    try {

        connectDB();

        const updateFields = {
            title, price, stock, color, size, category, description
        }

        Object.keys(updateFields).forEach(
            key => 
                (updateFields[key] === "" || undefined) && delete updateFields[key])
        
        await Product.findByIdAndUpdate(id, updateFields);
        
    } catch (err) {
        throw new Error(`Failed to update product ${err}`);
    }


    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}