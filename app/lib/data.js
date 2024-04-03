import { User, Product } from "./models";
import { connectDB } from "./utils";





export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 2;

    try {
        connectDB();

        const count = await User.find({username : { $regex : regex }}).count();
        const users = await User.find({username : { $regex : regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        
        return { users, count };
    } catch(err) {
        console.log(err);
        throw new Error(`Failed to fetch users ${err}`);
    }
}


export const fetchSingleUser = async (id) => {

    try {
        connectDB();

        const user = await User.findById(id);
        
        return user;
    } catch(err) {
        console.log(err);
        throw new Error(`Failed to fetch user ${err}`);
    }
}















export const fetchProducts = async (q, page) => {

    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 2;

    try {
        connectDB();

        const count = await Product.find({title : { $regex : regex }}).count();
        const products = await Product.find({title : { $regex : regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        
        return { products, count };
    } catch(err) {
        console.log(err);
        throw new Error(`Failed to fetch products ${err}`);
    }
}

export const fetchSingleProduct = async (id) => {

    try {
        connectDB();

        const product = await Product.findById(id);
        
        return product;
    } catch(err) {
        console.log(err);
        throw new Error(`Failed to fetch product ${err}`);
    }
}