import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function absTimer() {
  return (
    <div>
      <div className={styles.abdy}>
        <div className={styles.bbdy}>
          <div className={styles.absb}>
            <Image
              alt="guy"
              src={"/ch.jpeg"}
              height={150}
              width={300}
              className={styles.im}
            />
            <div className={styles.che1}>CHEST BEGINNER</div>

            <Link href={"/"}>
              <button className={styles.back2}>
                <div>home</div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Push-Ups</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼11 mins• 11 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            alt="guy with the greates image ever"
            src={"/pushu.png"}
            height={200}
            width={200}
          />
          <div className={styles.jumtim}>x10</div>

          <div className={styles.backWard}>
            <Link href={"/CHESTBEGINNER/pushUp"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/CHESTBEGINNER/wideArmPushUp"}>
              <MdArrowForwardIos />
            </Link>
          </div>

          <h5>4 out of 11</h5>
        </div>
      </div>
    </div>
  );
}

export default absTimer;
