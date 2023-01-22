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
            <div className={styles.phoneView}>
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/ch.jpeg"}
                height={170}
                width={320}
                className={styles.im}
              />
            </div>
            <div className={styles.che1}>CHEST BEGINNER</div>

            <Link href={"/BEGINNER/chestBeginner"}>
              <button className={styles.back2}>
                <div>←</div>
              </button>
            </Link>
            <h4 className={styles.bgsetabs}>Cobra Stretch</h4>
            <hr className={styles.vrabsb} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼11 mins• 11 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <div className={styles.animation}>
            {" "}
            <Image
              alt="guy with the greates image ever"
              src={"/costreh.jpg"}
              height={250}
              width={250}
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
            <Link href={"/CHESTBEGINNER/wideArmPushUp2"}>
              <MdArrowBackIosNew />
            </Link>
          </div>
          <div className={styles.forWard}>
            <Link href={"/CHESTBEGINNER/chestStretch"}>
              <MdArrowForwardIos />
            </Link>
          </div>
          <h5 className={styles.doneOutOfRemaining}>10 out of 11</h5>
        </div>
      </div>
    </div>
  );
}

export default absTimer;
