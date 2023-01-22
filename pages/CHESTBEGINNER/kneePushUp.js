import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowBackIosNew,
  MdHomeFilled,
  MdArrowForwardIos,
} from "react-icons/md";

function absTimer() {
  return (
    <div>
      <div className={styles.abdy}>
        <div className={styles.bbdy}>
          <div className={styles.absb}>
            <div className={styles.phoneView}>
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/ch.jpeg"}
                height={170}
                width={320}
                className={styles.im}
              />
            </div>
            <div className={styles.che1}>CHEST BEGINNER</div>

            <Link href={"/"}>
              <button className={styles.back2}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Knee Push-Ups</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼11 mins • 11 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/knepush.jpg"}
              height={250}
              width={250}
            />
          </div>
          <div className={styles.jumtim}>x12</div>

          <div className={styles.backWard}>
            <Link href={"/CHESTBEGINNER/inclinePushUp"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/CHESTBEGINNER/pushUp"}>
              <MdArrowForwardIos />
            </Link>
          </div>

          <h5 className={styles.doneOutOfRemaining}>3 out of 11</h5>
        </div>
      </div>
    </div>
  );
}

export default absTimer;
