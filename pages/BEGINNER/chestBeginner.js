import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ChestBeginner() {
  const handleClick = (e, path) => {
    if (path === "/chesBigStart") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <>
      <div className={styles.bdy}>
        <div className={styles.bbdy}>
          <Image
            style={{ borderRadius: "20px" }}
            alt="guy"
            src={"/ch.jpeg"}
            height={170}
            width={320}
            className={styles.im3}
          />
          <div className={styles.che}>CHEST BEGINNER</div>

          <Link href={"/"}>
            <button className={styles.back3}>←</button>
          </Link>
          <h4 className={styles.bgset2}>Set of Workouts</h4>
          <hr className={styles.vr} />
          <div className={styles.worksb} class="card">
            <h5 className={styles.time3}>▼11 mins• 11 workouts</h5>
          </div>
          <hr className={styles.vrche} style={{ marginTop: "-75px" }} />

          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
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
            alt="the pic of the greatest guy ever"
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
            alt="the pic of the greatest guy ever"
            src="/knepush.jpg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>KNEE PUSH-UPS</div>
          <div className={styles.x}>x12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/pushu.png"
            height={80}
            width={80}
          />
          <div className={styles.bleg}>PUSH-UPS</div>
          <div className={styles.x}>x10</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/wide.png"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>WIDE ARM PUSH-UPS</div>
          <div className={styles.x}>x10</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/inclipus.jpg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>INCLINE PUSH-UPS</div>
          <div className={styles.x}>x12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/walbox.webp"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>BOX PUSH-UPS</div>
          <div className={styles.sec}>X12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/wide.png"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>WIDE ARM PUSH-UPS</div>
          <div className={styles.x}>x10</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/hindps.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>HINDU PUSH-UPS</div>
          <div className={styles.x}>x10</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
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
            alt="the pic of the greatest guy ever"
            src="/chestreh.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>CHEST STRETCH</div>
          <div className={styles.sec}>00:20</div>
          <hr className={styles.vrs} />
          <Link href={"/chBigStart"}>
            <button className={styles.btn}>
              <div onClick={(e) => handleClick(e, "absBigStart")}>START</div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
