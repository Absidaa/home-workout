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
              src={"/armad.jpeg"}
              height={150}
              width={320}
              className={styles.im11}
            />
            <div className={styles.abs9}>ARM ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.back11}>
                <div>←</div>
              </button>
            </Link>
            <h4 className={styles.bgset11}>Set of Workouts</h4>
            <hr className={styles.vrarmad} />
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
            src="/ArmCirclesFrontGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>ARM CIRCLES CLOCKWISE</div>
          <div className={styles.sec}> 00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/ArmCirclesGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>ARM CIRCLES COUNTER CLOCKWISE</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/legBarellCurlLeftGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>LEG BARBELL CURL LEFT</div>
          <div className={styles.x}>x16</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/legBarellCurlLeftGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>LEG BARBELL CURL RIGHT</div>
          <div className={styles.x}>x16</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/burpeeGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.htoch}>BURPEES</div>
          <div className={styles.x}>x16</div>
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
          <div className={styles.jjak}>ARM CURLS CRUNCH LEFT</div>
          <div className={styles.x}>x14</div>
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
          <div className={styles.jjak}>ARM CURLS CRUNCH RIGHT</div>
          <div className={styles.x}>X14</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/TricepsDipsGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>FLOOR TRICEP DIPS</div>
          <div className={styles.x}>x18</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/AlternatingHooksGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>ALTERNATING HOOKS</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/militaryPushUpGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>MILITARY PUSH-UPS</div>
          <div className={styles.x}>x14</div>
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
          <div className={styles.jjak}>SHOULDER GATORS</div>
          <div className={styles.x}>x16</div>
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
          <div className={styles.jjak}>DOORWAY CURLS LEFT</div>
          <div className={styles.x}>x8</div>
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
          <div className={styles.jjak}>DOORWAY CURLS RIGHT</div>
          <div className={styles.x}>x8</div>
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
          <div className={styles.jjak}>MODIFIED PUSH-UPS LOW HOLD</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/pushUpRotationGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>PUSH-UPS AND ROTATION</div>
          <div className={styles.x}>X12</div>
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
          <div className={styles.jjak}>TRICEPS STRETCH LEFT</div>
          <div className={styles.sec}>00:30</div>
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
          <div className={styles.jjak}>TRICEPS STRETCH RIGHT</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/stbice.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>STANDING BICEPS STRETCH LEFT</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/standingBicepStretchRightGif.jpg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>STANDING BICEPS STRETCH RIGHT</div>
          <div className={styles.x}>x16</div>
          <hr className={styles.vrs} />
          <Link href={"/ARMADVANCE/armAdvanStart"}>
            <button className={styles.btn}>
              <div onClick={(e) => handleClick(e, "armAdvancStart")}>START</div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default chestBeginner;
