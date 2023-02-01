import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowForwardIos,
  MdHomeFilled,
  MdArrowBackIosNew,
} from "react-icons/md";

export default function Incheworm() {
  return (
    <div>
      <div className={styles.abdy}>
        <div className={styles.bbdy}>
          <div className={styles.absb}>
            <div className={styles.phoneView}>
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/ar.jpeg"}
                height={170}
                width={320}
                className={styles.armBeginnerWorkOutDemonstrationImage}
              />
            </div>
            <div className={styles.armBeginnerDemonstration}>ARM BEGINNER</div>

            <Link href={"/"}>
              <button
                className={styles.armBeginnerWorkOutDemonstrationBackButton}
              >
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.armBeginnerWorkOutDemonstrationName}>
              Inchworms
            </h4>
            <hr
              className={styles.armBeginnerWorkOutDemonstrationHorizontalLine}
            />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.armBeginnerWorkOutDemonstrationTime}>
              ▼14 mins • 16 workouts
            </h5>
          </div>
          <hr className={styles.vr} />

          <Image
            alt="guy with the greates image ever"
            src={"/wor.jpg"}
            height={200}
            width={200}
          />
          <div className={styles.jumtim}>x8</div>

          <div className={styles.backWard}>
            <Link href={"/ARMBEGINNER/pushUp"}>
              <MdArrowBackIosNew />
            </Link>
          </div>

          <div className={styles.forWard}>
            <Link href={"/ARMBEGINNER/wallPushUp"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>11 out of 16</h5>
        </div>
      </div>
    </div>
  );
}
