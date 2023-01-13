import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

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

            <Link href={"/BEGINNER/armBeginner"}>
              <button className={styles.back2}>
                <div>←</div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Arm Raises</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼17 mins • 19 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            alt="guy with the greates image ever"
            src={"/armraises.webp"}
            height={200}
            width={200}
          />
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

          <div className={styles.forWard}>
            <Link href={"/ARMBEGINNER/sideArmRaises"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5>1 out of 19</h5>
        </div>
      </div>
    </div>
  );
}

export default absTimer;
