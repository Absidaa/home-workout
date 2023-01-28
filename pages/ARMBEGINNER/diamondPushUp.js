import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  MdHomeFilled,
  MdArrowForwardIos,
  MdArrowBackIosNew,
} from "react-icons/md";

export default function DiamondPushUp() {
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
              {" "}
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/ar.jpeg"}
                height={170}
                width={320}
                className={styles.im}
              />
            </div>
            <div className={styles.che1}>ARM BEGINNER</div>

            <Link href={"/"}>
              <button className={styles.back2}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4
              className={styles.bgsetabs}
              style={{ marginBottom: "1vh", marginTop: "-20px" }}
            >
              Diamond Push-Ups
            </h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼14 mins • 16 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            alt="guy with the greates image ever"
            src={"/dups.jpg"}
            height={200}
            width={200}
          />
          <div className={styles.jumtim}>x6</div>

          <div className={styles.backWard}>
            <Link href={"/ARMBEGINNER/armCircleCounterClockwise"}>
              <MdArrowBackIosNew />
            </Link>
          </div>

          <div className={styles.forWard}>
            <Link href={"/ARMBEGINNER/jumpingJack"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>6 out of 16</h5>
        </div>
      </div>
    </div>
  );
}
