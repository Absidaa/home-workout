import Link from 'next/link'
import React from 'react'
import styles from "../styles/navbar.module.css"

function navbar() {
    return (<>
        <div className={styles.navbar}>
           <Link href={"/"}> <div className={styles.left}>Home</div></Link>
        
        <div className={styles.right}>open</div>
        </div>
    </>)
}

export default navbar