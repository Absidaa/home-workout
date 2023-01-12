import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

function chestBeginner() {
  const handleClick = (e, path) => {
    if (path === "/chesBigStart") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <>
      <div className={styles.bdy}>
        <div className={styles.bbdy}>
          <div className={styles.absb}>
            <Image
              alt="guy"
              src={"/lega.jpeg"}
              height={150}
              width={300}
              className={styles.im11}
            />
            <div className={styles.abs9}>LEG ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.back12}>←</button>
            </Link>
            <h4 className={styles.bgset12}>Set of Workouts</h4>
            <hr className={styles.vrlegad} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼11 mins• 11 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/jupjak.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>JUMPING JACKS</div>
          <div className={styles.sec}> 00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/inclipus.jpg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>INCLINE PUSH-UPS</div>
          <div className={styles.x}>x16</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/knepush.jpg"
            height={80}
            width={80}
          />
          <div className={styles.btwist}>KNEE PUSH-UPS</div>
          <div className={styles.x}>x12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/pushu.png"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>PUSH-UPS</div>
          <div className={styles.x}>x10</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/wide.png"
            height={80}
            width={80}
          />
          <div className={styles.htoch}>WIDE ARM PUSH-UPS</div>
          <div className={styles.x}>x10</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/inclipus.jpg"
            height={80}
            width={80}
          />
          <div className={styles.bleg}>INCLINE PUSH-UPS</div>
          <div className={styles.x}>x12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/walbox.webp"
            height={80}
            width={80}
          />
          <div className={styles.bplk}>BOX PUSH-UPS</div>
          <div className={styles.sec}>X12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/wide.png"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>WIDE ARM PUSH-UPS</div>
          <div className={styles.sec}>x10</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/hindps.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>HINDU PUSH-UPS</div>
          <div className={styles.sec}>x10</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/costreh.jpg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>COBRA STRETCH</div>
          <div className={styles.sec}>00:20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/strch.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>CHEST STRETCH</div>
          <div className={styles.sec}>00:20</div>
          <hr className={styles.vrs} />
          <Link href={"/chesBigStart"}>
            <button className={styles.btn}>
              <div onClick={(e) => handleClick(e, "absBigStart")}>START</div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default chestBeginner;
