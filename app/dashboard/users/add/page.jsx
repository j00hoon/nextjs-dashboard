import styles from "@/app/ui/dashboard/users/add/add.module.css";




const AddUser = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="password" name="password" required />
                <input type="phone" placeholder="phone" name="phone" required />
                <select name="isAdmin" id="isAdmin" defaultValue="Is Admin?">
                    {/* <option value={false}>Is Admin?</option> */}
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive" defaultValue="Is Active?">
                    {/* <option value={false}>Is Active?</option> */}
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea 
                    name="address"
                    id="address"
                    rows="15"
                    placeholder="Address"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddUser;
