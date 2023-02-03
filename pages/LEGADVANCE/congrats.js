import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { MdHomeFilled, MdArrowBackIosNew } from "react-icons/md";

export default function Congrats() {
  return (
    <>
      <div>
        <div className={styles.abdy}>
          <div className={styles.bbdy}>
            <div className={styles.absb}>
              <div className={styles.phoneView}>
                <Image
                  style={{ borderRadius: "20px", marginLeft: "20px" }}
                  alt="guy"
                  src={"/lega.jpeg"}
                  height={170}
                  width={320}
                  className={styles.legAdvancedCongratsImage}
                />
              </div>
              <div className={styles.legAdvancedCongrats}>LEG ADVANCED</div>
            </div>
            <div className={styles.worksb} class="card"></div>
            <hr className={styles.vr} style={{ marginTop: "13vh" }} />

            <div className={styles.animation}>
              <div>
                <Image
                  style={{ marginTop: "10vh" }}
                  alt="congrats"
                  src={"/congratsGif.gif"}
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <p style={{ fontWeight: "bolder", fontFamily: "Roboto" }}>
              Some progress made today. 😊
            </p>
            <div className={styles.backWard}>
              <Link href={"/LEGADVANCE/calfStretchRight"}>
                <MdArrowBackIosNew
                  style={{ marginLeft: "3vh", marginTop: "-10vh" }}
                />
              </Link>
            </div>
            <Link href={"/"}>
              <button className={styles.legAdvancedCongratsHomeButton}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
