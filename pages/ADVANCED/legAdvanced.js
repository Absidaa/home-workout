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
              src={"/lega.jpeg"}
              height={150}
              width={300}
              className={styles.im11}
            />
            <div className={styles.abs9}>LEG ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.back12}>
                <div>←</div>
              </button>
            </Link>
            <h4 className={styles.bgset12}>Set of Workouts</h4>
            <hr className={styles.vrlegad} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼16 mins • 13 workouts</h5>
          </div>
          <hr className={styles.vr} />

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
          <div className={styles.bplk}>BURPEE</div>
          <div className={styles.x}> x10</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/squatGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.bplk}>SQUATS</div>
          <div className={styles.x}>x14</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/CurtsyLungeGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>CURTSY LUNGES</div>
          <div className={styles.x}>x14</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/LyingSideLegCircleGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>SIDE LEG CIRCLES LEFT</div>
          <div className={styles.x}>x12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/LyingSideLegCircleGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>SIDE LEG CIRCLES RIGHT</div>
          <div className={styles.x}>x12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/jumpingSquatsGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>JUMPING SQUATS</div>
          <div className={styles.x}>x14</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/glutterKickLeftGif.png"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>GLUTE KICK BACK LEFT</div>
          <div className={styles.sec}>X12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/glutterKickRightGif.png"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>GLUTE KICK BACK RIGHT</div>
          <div className={styles.sec}>x12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/wallsitGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.bleg}>WALL SIT</div>
          <div className={styles.sec}>00:40</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/SquadLeft.png"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>LEFT QUAD STRETCH</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/SquadRight.png"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>RIGHT QUAD STRETCH</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/calfStretchLeft.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>CALF STRETCH LEFT</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            src="/calfStretchRight.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>CALF STRETCH RIGHT </div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Link href={"/LEGADVANCE/legAdvanStart"}>
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
