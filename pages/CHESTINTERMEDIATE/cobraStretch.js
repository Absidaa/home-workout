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

export default function CobraStretch() {
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
                src={"/cheinter.jpeg"}
                height={170}
                width={310}
                className={styles.chestIntermediateWorkOutImage}
              />
            </div>
            <div className={styles.chestIntermediateWorkOutDemonstration}>
              CHEST INTERMEDIATE
            </div>

            <Link href={"/"}>
              <button
                className={
                  styles.chestIntermediateWorkOutDemonstrationBackButton
                }
              >
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.chestIntermediateWorkOutDemonstrationName}>
              Cobra Stretch
            </h4>
            <hr
              className={
                styles.chestIntermediateWorkOutDemonstrationHorizontalLine
              }
            />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.chestIntermediateWorkOutDemonstrationTime}>
              ▼11 mins • 13 workouts
            </h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/CobraStretchGif.gif"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>00:30</div>

          <div className="stopwatch">
            <div className={styles.numbers}>
              <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
              <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className="buttons">
              <button className={styles.start} onClick={() => setRunning(true)}>
                <div>Start</div>
              </button>
              <button className={styles.stop} onClick={() => setRunning(false)}>
                <div>Stop</div>
              </button>
              <button className={styles.reset} onClick={() => setTime(0)}>
                <div> Reset</div>
              </button>
            </div>
          </div>
          <div className={styles.backWard}>
            <Link href={"/CHESTINTERMEDIATE/declinePushUp"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/CHESTINTERMEDIATE/chestStretch"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>12 out of 13</h5>
        </div>
      </div>
    </div>
  );
}
