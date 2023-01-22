import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowForwardIos,
  MdHomeFilled,
  MdArrowBackIosNew,
} from "react-icons/md";

export default function Squats() {
  return (
    <div>
      <div className={styles.abdy}>
        <div className={styles.bbdy}>
          <div className={styles.absb}>
            <Image
              alt="guy"
              src={"/leg.jpeg"}
              height={150}
              width={300}
              className={styles.im}
            />
            <div className={styles.che0}>LEG BEGINNER</div>

            <Link href={"/"}>
              <button className={styles.back2}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Squats</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼15 mins • 13 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            alt="guy with the greates image ever"
            src={"/squat.jpeg"}
            height={200}
            width={200}
          />
          <div className={styles.jumtim}>x12</div>

          <div className={styles.backWard}>
            <Link href={"/LEGBEGINNER/sideHop"}>
              <MdArrowBackIosNew />
            </Link>
          </div>

          <div className={styles.forWard}>
            <Link href={"/LEGBEGINNER/legLiftLeft"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5>2 out of 13</h5>
        </div>
      </div>
    </div>
  );
}
