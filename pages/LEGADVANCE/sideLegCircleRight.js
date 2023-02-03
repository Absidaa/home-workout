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

export default function SideLegCircleRight() {
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
                src={"/lega.jpeg"}
                height={170}
                width={320}
                className={styles.legAdvancedWorkoutImage}
              />
            </div>
            <div className={styles.legAdvancedWorkout}>LEG ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.legAdvancedWorkOutBackButton}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.legAdvancedWorkOutName}>
              Side Leg Circles Right{" "}
            </h4>
            <hr className={styles.LegAdvanceWorkOutHorizontalLine} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.legAdvancedWorkOutTime}>
              ▼16 mins • 13 workouts
            </h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/LyingSideLegCircleGif.gif"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>x14</div>

          <div className={styles.backWard}>
            <Link href={"/LEGADVANCE/sideLegCircleLeft"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/LEGADVANCE/jumpingSquat"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>5 out of 13</h5>
        </div>
      </div>
    </div>
  );
}
