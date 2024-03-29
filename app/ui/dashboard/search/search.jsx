"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";




const Search = ({placeholder}) => {

    const searchParam = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();


    const handleSearch = (e) => {
        const params = new URLSearchParams(searchParam);

        if (e.target.value) {
            params.set("q", e.target.value);
        } else {
            params.delete("q");
        }

        replace(`${pathname}?${params}`);    
    }




    



    


    return (
        <div className={styles.container}>
            <MdSearch />
            <input 
                type="text" 
                placeholder={placeholder} 
                className={styles.input} 
                onChange={handleSearch}
            />
        </div>
    );
}
  
export default Search;