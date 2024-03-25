import Image from "next/image";
import styles from "./rightbar.module.css";






const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                
                <div className={styles.bgContainer}>
                    <Image 
                        src="/astronaut.png"
                        alt=""
                        fill
                    />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>
                        🔥 Available Now
                    </span>
                </div>

            </div>
        </div>
    );
}

export default Rightbar;