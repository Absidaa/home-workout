import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdHomeFilled,
} from "react-icons/md";

export default function RussianTwist() {
  return (
    <div>
      <div className={styles.abdy}>
        <div className={styles.bbdy}>
          <div className={styles.absb}>
            <div className={styles.phoneView}>
              {" "}
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/absb.jpeg"}
                height={150}
                width={320}
                className={styles.im}
              />
            </div>
            <div className={styles.abs}>ABS BEGINNER</div>

            <Link href={"/"}>
              <button className={styles.back2}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Russian Twist</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼20 mins• 16 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/rutwist.png"}
              height={250}
              width={250}
            />
          </div>
          <div className={styles.jumtim}>x32</div>

          <div className={styles.backWard}>
            <Link href={"/ABSBEGINNERWORKOUT/abdominalCrunches2"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/ABSBEGINNERWORKOUT/mountainClimber2"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>9 out of 16</h5>
        </div>
      </div>
    </div>
  );
}
