import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";



export const addUser = async (formData) => {

    "use server";
    
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