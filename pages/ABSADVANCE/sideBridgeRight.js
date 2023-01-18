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
              style={{ borderRadius: "20px" }}
              alt="guy"
              src={"/absad.jpeg"}
              height={160}
              width={300}
              className={styles.im11}
            />
            <div className={styles.abs7}>ABS ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.back7}>
                <div>
                  <MdHomeFilled />
                </div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Side Bridge Right</h4>
            <hr className={styles.vrabsa} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼25 mins • 19 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            alt="guy with the greates image ever"
            src={"/SidePlankHipRightGif.gif"}
            height={200}
            width={200}
          />
          <div className={styles.jumtim}>x20</div>

          <div className={styles.backWard}>
            <Link href={"/ABSADVANCE/sideBridgeLeft"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/ABSADVANCE/abdominalCrunches"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5>4 out of 19</h5>
        </div>
      </div>
    </div>
  );
}

export default absTimer;
