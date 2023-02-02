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

export default function DoorWayCurlRight() {
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
                src={"/armad.jpeg"}
                height={170}
                width={320}
                className={styles.armAdvancedWorkOutImage}
              />
            </div>
            <div className={styles.armAdvancedWorkOut}>ARM ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.armAdvancedWorkOutBackButton}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.armAdvancedWorkOutName}>
              Door Way Curls Right
            </h4>
            <hr className={styles.armAdvancedWorkOutHorizontalLine} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.armAdvancedWorkOutTime}>
              ▼25 mins • 18 workouts
            </h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/doorwayCurlsRightGif.gif"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>x8</div>

          <div className={styles.backWard}>
            <Link href={"/ARMADVANCE/doorWayCurlLeft"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/ARMADVANCE/modifiedPushUp"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>12 out of 18</h5>
        </div>
      </div>
    </div>
  );
}
