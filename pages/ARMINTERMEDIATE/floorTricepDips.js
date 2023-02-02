import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdArrowForwardIos,
  MdHomeFilled,
  MdArrowBackIosNew,
} from "react-icons/md";

export default function FloorTricepsDips() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div>
      <div className={styles.abdy}>
        <div className={styles.bbdy}>
          <div className={styles.absb}>
            <div className={styles.phoneView}>
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/armi.jpeg"}
                height={155}
                width={310}
                className={styles.armIntermediateWorkOutImage}
              />
            </div>
            <div className={styles.armItermediateWorkOut}>ARM INTERMEDIATE</div>
            <Link href={"/"}>
              <button className={styles.armIntermediateWorkOutBackButton}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.armIntermediatWorkOutName}>
              Floor Triceps Dips
            </h4>
            <hr className={styles.armIntermediateWorkOutHorizontalLine} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.armIntermediateWorkOutTime}>
              ▼11 mins • 13 workouts
            </h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/TricepsDipsGif.gif"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>x14</div>

          <div className={styles.backWard}>
            <Link href={"/ARMINTERMEDIATE/armCircle"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/ARMINTERMEDIATE/militaryPushUp"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>2 out of 13</h5>
        </div>
      </div>
    </div>
  );
}
