import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowForwardIos,
  MdHomeFilled,
  MdArrowBackIosNew,
} from "react-icons/md";

export default function AbdominalCrunches() {
  return (
    <div>
      <div className={styles.abdy}>
        <div className={styles.bbdy}>
          <div className={styles.absb}>
            <Image
              alt="guy"
              src={"/absi.jpeg"}
              height={150}
              width={300}
              className={styles.im}
            />
            <div className={styles.che1}>ABS INTERMEDIATE</div>

            <Link href={"/"}>
              <button className={styles.back7}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Abdominal Crunches</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼10 mins • 11 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            alt="guy with the greates image ever"
            src={"/crunchGif.gif"}
            height={200}
            width={200}
          />
          <div className={styles.jumtim}>x20</div>

          <div className={styles.backWard}>
            <Link href={"/ABSINTERMEDIATE/jumpingJack"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/ABSINTERMEDIATE/russianTwist"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5>2 out of 10</h5>
        </div>
      </div>
    </div>
  );
}
