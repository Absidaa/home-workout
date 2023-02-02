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

export default function Vup() {
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
                src={"/absad.jpeg"}
                height={170}
                width={320}
                className={styles.absAdvacedWorkOutImage}
              />
            </div>
            <div className={styles.absAdvancedWorkOutDemonstration}>
              ABS ADVANCED
            </div>

            <Link href={"/"}>
              <button
                className={styles.absAdvancedWorkOutDemonstrationBackButton}
              >
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.absAdvancedWorkOutDemonstrationName}>V-UP</h4>
            <hr
              className={styles.absAdvancedWorkOutDemonstrationHorizontalLine}
            />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.absAdavancedWorkOutDemonstrationTime}>
              ▼25 mins • 19 workouts
            </h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/vUpGif.gif"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>x18</div>

          <div className={styles.backWard}>
            <Link href={"/ABSADVANCE/sidePlankRight"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/ABSADVANCE/pushUpRotation"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>9 out of 19</h5>
        </div>
      </div>
    </div>
  );
}
