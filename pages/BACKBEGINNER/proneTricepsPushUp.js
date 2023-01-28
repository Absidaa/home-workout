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

export default function ProneTricepsPushUp() {
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
                src={"/back.webp"}
                height={180}
                width={320}
                className={styles.im}
              />
            </div>
            <div className={styles.backBeginner}>BACK BEGINNER</div>

            <Link href={"/"}>
              <button
                className={styles.back9}
                style={{ marginBottom: "-39px", marginTop: "20px" }}
              >
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4
              className={styles.bgsetabs}
              style={{ marginBottom: "4px", marginTop: "-10px" }}
            >
              Prone Triceps Push-Ups
            </h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼11 mins • 12 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/proneTriceps.jpg"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>x14</div>

          <div className={styles.backWard}>
            <Link href={"/BACKBEGINNER/catCowPose"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/BACKBEGINNER/reclinedRhomboidSqueezes"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>10 out of 12</h5>
        </div>
      </div>
    </div>
  );
}
