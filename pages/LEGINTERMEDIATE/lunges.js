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

export default function Lunges() {
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
                src={"/legin.jpeg"}
                height={170}
                width={320}
                className={styles.legIntermediateWorkOutImage}
              />
            </div>
            <div className={styles.legIntermediateWorkOut}>
              LEG INTERMEDIATE
            </div>

            <Link href={"/"}>
              <button className={styles.legIntermediateWorkOutBackButton}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.legIntermediateWorkOutName}>Lunges </h4>
            <hr className={styles.legIntermediateWorkOutHorizontalLine} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.legIntermediateWorkOutTime}>
              ▼19 mins • 17 workouts
            </h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/lungeGif.gif"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>x14</div>

          <div className={styles.backWard}>
            <Link href={"/LEGINTERMEDIATE/fireHydrateRight"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/LEGINTERMEDIATE/sumoSquats"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>5 out of 17</h5>
        </div>
      </div>
    </div>
  );
}
