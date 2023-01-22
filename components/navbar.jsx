import Link from 'next/link'
import React from 'react'
import styles from "../styles/navbar.module.css"
import { BsJustify } from "react-icons/bs";

function navbar() {
    return (<>
        <div className={styles.navbar}>
           <Link href={"/"}> <div className={styles.left}><a>Home</a></div></Link>
        
        <div className={styles.right}><BsJustify size={30}/></div>
        </div>
    </>)
}

export default navbar