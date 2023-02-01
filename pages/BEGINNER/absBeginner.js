import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AbsBeginner() {
  const handleClick = (e, path) => {
    if (path === "/absBigStart") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <>
      <div className={styles.abdy}>
        <div className={styles.bbdy}>
          <div className={styles.absb}>
            <div className={styles.phoneView}>
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/absb.jpeg"}
                height={170}
                width={315}
                className={styles.im}
              />
            </div>
            <div className={styles.absBeginnerLayOut}>ABS BEGINNER</div>

            <Link href={"/"}>
              <button className={styles.absBeginnerLayOutBackButton}>
                <div>←</div>
              </button>
            </Link>
            <h4 className={styles.absBeginnerSetOfWorkOut}>Set of Workouts</h4>
            <hr className={styles.absBeginnerHorizotalLine} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.absBeginnerWorkOuttime}>
              ▼20 mins• 16 workouts
            </h5>
          </div>
          <hr className={styles.vr} />

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
          <div className={styles.sec}> 00:20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/crun.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>ABDOMINAL CRUNCHES</div>
          <div className={styles.x}>x16</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/rutwist.png"
            height={80}
            width={80}
          />
          <div className={styles.btwist}>RUSSIAN TWIST</div>
          <div className={styles.x}>x20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/moclim.jpg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>MOUNTAIN CLIMBER</div>
          <div className={styles.x}>x16</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/htouch.jpg"
            height={80}
            width={80}
          />
          <div className={styles.htoch}>HEEL TOUCH</div>
          <div className={styles.x}>x20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/lraise.jpg"
            height={80}
            width={80}
          />
          <div className={styles.bleg}>LEG RAISES</div>
          <div className={styles.x}>x14</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/diaplak.png"
            height={80}
            width={80}
          />
          <div className={styles.bplk}>PLANK</div>
          <div className={styles.sec}>00:30</div>
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
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/crun.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>ABDOMINAL CRUNCHES</div>
          <div className={styles.sec}>X12</div>
          <hr className={styles.vrs} />

          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/rutwist.png"
            height={80}
            width={80}
          />
          <div className={styles.btwist}>RUSSIAN TWIST</div>
          <div className={styles.x}>x20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/moclim.jpg"
            height={80}
            width={80}
          />

          <div className={styles.jjak}>MOUNTAIN CLIMBER</div>
          <div className={styles.x}>x12</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/htouch.jpg"
            height={80}
            width={80}
          />
          <div className={styles.htoch}>HEEL TOUCH</div>
          <div className={styles.x}>x20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/lraise.jpg"
            height={80}
            width={80}
          />

          <div className={styles.bleg}>LEG RAISES</div>
          <div className={styles.x}>x14</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/diaplak.png"
            height={80}
            width={80}
          />

          <div className={styles.bplk}>PLANK</div>
          <div className={styles.sec}>00:30</div>
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
          <div className={styles.jjak}>COBRA STRECH</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/lft.jpg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>SPINE LUMBER TWIST STRECH LEFT</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/rigt.jpeg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>SPINE LUMBER TWIST STRECH RIGHT</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />

          <Link href={"/absBigStart"}>
            <button className={styles.btn}>
              <div onClick={(e) => handleClick(e, "absBigStart")}>START</div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
