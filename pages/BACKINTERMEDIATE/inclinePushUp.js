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

function absTimer() {
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
            <Image
              alt="guy"
              src={"/backi.jpeg"}
              height={150}
              width={280}
              className={styles.im11}
            />
            <div className={styles.abs3}>BACK INTERMEDIATE</div>

            <Link href={"/INTERMEDIATE/chestIntermediate"}>
              <button className={styles.back7}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Incline Push-Ups</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼14 mins • 12 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            alt="guy with the greates image ever"
            src={"/InclinePushUpGif.webp"}
            height={200}
            width={200}
          />
          <div className={styles.jumtim}>x14</div>

          <div className={styles.backWard}>
            <Link href={"/BACKINTERMEDIATE/tricepKickBack"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/BACKINTERMEDIATE/rhomboidPulls"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5>3 out of 13</h5>
        </div>
      </div>
    </div>
  );
}

export default absTimer;
