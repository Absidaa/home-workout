import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdHomeFilled,
} from "react-icons/md";

function absTimer() {
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
            <h4 className={styles.bgsetabs}>Abdominal Crunches</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼20 mins• 16 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/crun.jpeg"}
              height={250}
              width={250}
            />
          </div>
          <div className={styles.jumtim}>x12</div>

          <div className={styles.backWard}>
            <Link href={"/ABSBEGINNERWORKOUT/plank"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/ABSBEGINNERWORKOUT/russianTwist2"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>8 out of 16</h5>
        </div>
      </div>
    </div>
  );
}

export default absTimer;
