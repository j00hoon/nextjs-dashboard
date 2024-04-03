import styles from "@/app/ui/dashboard/products/add/add.module.css";
import { addProduct } from "@/app/lib/action";




const AddProduct = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type="text" placeholder="title" name="title" required />
                <select name="category" id="category" defaultValue="Choose a category">
                    {/* <option value="general">Choose a category</option> */}
                    <option value="kitchen">Kitchen</option>
                    <option value="Phone">Phone</option>
                    <option value="Computer">Computer</option>
                </select>
                <input type="number" placeholder="price" name="price" />
                <input type="number" placeholder="stock" name="stock" />
                <input type="text" placeholder="color" name="color" />
                <input type="text" placeholder="size" name="size" />
                <textarea 
                    name="desc"
                    id="desc"
                    rows="15"
                    placeholder="Description"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddProduct;
