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
            <div className={styles.phoneView}>
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/absad.jpeg"}
                height={170}
                width={320}
                className={styles.im11}
              />
            </div>
            <div className={styles.abs7}>ABS ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.back7}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Push-Ups & Rotation</h4>
            <hr className={styles.vrabsa} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼25 mins • 19 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            <Image
              alt="guy with the greates image ever"
              src={"/pushUpRotationGif.gif"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>x24</div>

          <div className={styles.backWard}>
            <Link href={"/ABSADVANCE/vUp"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/ABSADVANCE/russianTwist"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>10 out of 19</h5>
        </div>
      </div>
    </div>
  );
}
