import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";




const SingleProduct = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image 
                        src="/noproduct.jpg"
                        alt=""
                        fill
                    />
                </div>
                IPhone
            </div>

            <div className={styles.formContainer}>
                <form className={styles.form}>

                    <label>Title</label>
                    <input type="text" name="title" placeholder="Seunghoon" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="999" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="23" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="Purple" />
                    <label>Size</label>
                    <input type="text" name="size" placeholder="Large" />
                    <label>Category</label>
                    <select name="cat" id="cat" defaultValue="None">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea 
                        name="desc" 
                        id="desc" 
                        rows={10} 
                        placeholder="Description" 
                    />
                    
                    <button>Update</button>

                </form>
            </div>

        </div>
    );
}

export default SingleProduct;