import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowForwardIos,
  MdHomeFilled,
  MdArrowBackIosNew,
} from "react-icons/md";

export default function TricepStretchLeft() {
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
                className={styles.im}
              />
            </div>
            <div className={styles.che1} style={{ marginLeft: "6.5rem" }}>
              ARM BEGINNER
            </div>

            <Link href={"/"}>
              <button className={styles.back2}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Triceps Stretch Left</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼14 mins • 16 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            alt="guy with the greates image ever"
            src={"/tsrelf2.jpeg"}
            height={200}
            width={200}
          />
          <div className={styles.jumtim}>x10</div>

          <div className={styles.backWard}>
            <Link href={"/ARMBEGINNER/wallPushUp"}>
              <MdArrowBackIosNew />
            </Link>
          </div>

          <div className={styles.forWard}>
            <Link href={"/ARMBEGINNER/tricepsStretchRight"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>13 out of 16</h5>
        </div>
      </div>
    </div>
  );
}
