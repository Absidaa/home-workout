import React from 'react'
import styles from "../styles/navbar.module.css"

function navbar() {
    return (<>
        <div className={styles.navbar}>
            <div className={styles.left}>Fit</div>
        
        <div className={styles.right}>open</div>
        </div>
    </>)
}

export default navbar