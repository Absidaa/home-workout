import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

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
              src={"/ar.jpeg"}
              height={150}
              width={300}
              className={styles.im}
            />
            <div className={styles.che1}>ARM BEGINNER</div>

            <Link href={"/"}>
              <button className={styles.back2}>
                <div>home</div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Diamond Push-Ups</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼17 mins • 19 workouts</h5>
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
          <h5>6 out of 19</h5>
        </div>
      </div>
    </div>
  );
}

export default absTimer;
