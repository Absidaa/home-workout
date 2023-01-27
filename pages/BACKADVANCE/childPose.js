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

export default function ChildPose() {
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
                src={"/bacad.jpeg"}
                height={170}
                width={320}
                className={styles.im11}
              />
            </div>
            <div className={styles.abs10}>BACK ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.back7}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Child&apos;s Pose</h4>
            <hr className={styles.vrchead} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼15 mins • 10 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            {" "}
            <Image
              alt="guy with the greates image ever"
              src={"/childPoseGif.gif"}
              height={200}
              width={200}
            />
          </div>
          <div className={styles.jumtim}>x16</div>

          <div className={styles.backWard}>
            <Link href={"/BACKADVANCE/reverseSnowAngel"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/BACKADVANCE/"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>10 out of 10</h5>
        </div>
      </div>
    </div>
  );
}
