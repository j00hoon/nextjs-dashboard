"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";



const Pagination = ({ count }) => {

    const searchParam = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();

    const page = searchParam.get("page") || 1;

    const params = new URLSearchParams(searchParam);
    const ITEM_PER_PAGE = 2;

    const hasPrevious = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;




    const handleChangePage = (type) => {
        type === "previous" ? 
            params.set("page", parseInt(page) - 1) 
            : 
            params.set("page", parseInt(page) + 1);

        replace(`${pathname}?${params}`);
    }


    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrevious} onClick={() => handleChangePage("previous")}>
                Previous
            </button>
            <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}>
                Next
            </button>
        </div>
    );
}
  
  export default Pagination;