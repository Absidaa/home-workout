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
              style={{ borderRadius: "20px" }}
              alt="guy"
              src={"/bacad.jpeg"}
              height={150}
              width={300}
              className={styles.im11}
            />
            <div className={styles.abs10}>BACK ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.back12}>
                <div>←</div>
              </button>
            </Link>
            <h4 className={styles.bgset13}>Set of Workouts</h4>
            <hr className={styles.vrbacad} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼15 mins • 10 workouts</h5>
          </div>
          <hr className={styles.vr} />

          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/jumpingjackGif.gif"
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
            src="/hyperextensionGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>HYPEREXTENSION</div>
          <div className={styles.x}>x14</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/pikePushUpGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.btwist}>PIKE PUSH-UPS</div>
          <div className={styles.x}>x14</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/reversePushUpGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>REVERSE PUSH-UPS</div>
          <div className={styles.x}>x12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/inchWormGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.htoch}>INCHWORMS</div>
          <div className={styles.x}>x16</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/catCowGif.webp"
            height={80}
            width={80}
          />
          <div className={styles.bleg}>CAT COW</div>
          <div className={styles.x}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/supinePushUpGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.bplk}>SUPINE PUSH-UPS</div>
          <div className={styles.sec}>X14</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/floorYRaisesGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>FLOOR Y RAISES</div>
          <div className={styles.sec}>x14</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/reverseSnowAngelsGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>REVERSE SNOW ANGELS</div>
          <div className={styles.sec}>x12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/CobraStretchGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>COBRA STRETCH</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />

          <Link href={"/BACKADVANCE/backAdvanStart"}>
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
