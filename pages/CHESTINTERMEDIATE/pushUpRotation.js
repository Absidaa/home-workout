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

export default function PushUpRotation() {
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
              src={"/cheinter.jpeg"}
              height={150}
              width={300}
              className={styles.im11}
            />
            <div className={styles.abs3}>CHEST INTERMEDIATE</div>

            <Link href={"/"}>
              <button className={styles.back7}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Push-Ups Rotation</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼11 mins • 13 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            alt="guy with the greates image ever"
            src={"/pushUpRotationGif.gif"}
            height={200}
            width={200}
          />
          <div className={styles.jumtim}>x12</div>

          <div className={styles.backWard}>
            <Link href={"/CHESTINTERMEDIATE/hinduPushUp"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/CHESTINTERMEDIATE/diamondPushUp"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5>7 out of 13</h5>
        </div>
      </div>
    </div>
  );
}
