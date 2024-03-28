import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";




const SingleProduct = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image 
                        src="/noavatar.png"
                        alt=""
                        fill
                    />
                </div>
                Seunghoon Baik
            </div>

            <div className={styles.formContainer}>
                <form className={styles.form}>

                    <label>Username</label>
                    <input type="text" name="username" placeholder="Seunghoon" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="test@gmail.com" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="+1234567" />
                    <label>Address</label>
                    <input type="text" name="address" placeholder="New York" />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <button>Update</button>

                </form>
            </div>

        </div>
    );
}

export default SingleUser;