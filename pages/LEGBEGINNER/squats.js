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
            <div className={styles.phoneView}>
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/leg.jpeg"}
                height={165}
                width={320}
                className={styles.legBeginnerWorkOutImage}
              />
            </div>
            <div className={styles.legBeginnerWorkOut}>LEG BEGINNER</div>

            <Link href={"/"}>
              <button className={styles.legBeginnerWorkOutBackButton}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.legBeginnerWorkOutName}>Squats</h4>
            <hr className={styles.legBeginnerWorkOutHorizontalLine} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.legBeginnerWorkOutTime}>
              ▼15 mins • 13 workouts
            </h5>
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
          <h5 className={styles.doneOutOfRemaining}>2 out of 13</h5>
        </div>
      </div>
    </div>
  );
}
