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
                  src={"/bacad.jpeg"}
                  height={175}
                  width={300}
                  className={styles.im11}
                />
              </div>
              <div
                className={styles.abs2}
                style={{
                  marginLeft: "58px",
                  marginTop: "20px",
                  fontSize: "28px",
                }}
              >
                BACK ADVANCED
              </div>
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
            <div className={styles.backWard}>
              <Link href={"/BACKADVANCE/standingBicepStretchRight"}>
                <MdArrowBackIosNew
                  style={{ marginLeft: "3vh", marginTop: "-10vh" }}
                />
              </Link>
            </div>
            <Link href={"/"}>
              <button
                className={styles.back7}
                style={{ marginLeft: "3vh", marginTop: "-10vh" }}
              >
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
