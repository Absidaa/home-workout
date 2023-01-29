import Link from 'next/link'
import React from 'react'
import styles from "../styles/navbar.module.css"
import {BsJustify}  from "react-icons/bs";


function Navbar() {
    return (<>
        <div className={styles.navbar}>
           <Link href={"/"}> <div className={styles.left}><a>Home</a></div></Link>
        
        <div className={styles.right}> 
        
            
            
            
            
            <div class="navbar">
            <div className={styles.dropdown}>
              <button className={styles.dropbtn} style={{marginTop: "17px"}}>
                Dropdown
                <i class="fa fa-caret-down"></i>
              </button>
              <div className={styles.dropdown_content}>
                <Link href="/untied" style={{ textDecoration: "none" }}>Untied</Link>
                <Link href="/#project"style={{ textDecoration: "none" }}>Sign Up </Link>
                <div className={styles.act}>
                  <Link href="/#contact"style={{ textDecoration: "none" }}>Login </Link>
                </div>
              </div>
                    </div>
                    </div>
            
            
            
            
            
            
            
            </div>
        </div>





    </>)
}

export default Navbar