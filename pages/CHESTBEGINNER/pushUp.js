import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowBackIosNew,
  MdHomeFilled,
  MdArrowForwardIos,
} from "react-icons/md";

export default function PushUp() {
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
                className={styles.chestImageBeginner}
              />
            </div>
            <div className={styles.chestBeginnerWorkOutDemonstration}>
              CHEST BEGINNER
            </div>

            <Link href={"/"}>
              <button
                className={styles.chestBeginnerWorkOutDemonstrationBackButton}
              >
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.chestBeginnerWorkOutName}>Push-Ups</h4>
            <hr
              className={styles.chestBeginnerWorkOutDemonstrationHorizotalLine}
            />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.chestBeginnerWorkOutDemonstrationTime}>
              ▼11 mins• 10 workouts
            </h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/pushu.png"}
              height={250}
              width={250}
            />
          </div>
          <div className={styles.jumtim}>x10</div>

          <div className={styles.backWard}>
            <Link href={"/CHESTBEGINNER/kneePushUp"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/CHESTBEGINNER/wideArmPushUp"}>
              <MdArrowForwardIos />
            </Link>
          </div>

          <h5 className={styles.doneOutOfRemaining}>3 out of 10</h5>
        </div>
      </div>
    </div>
  );
}
