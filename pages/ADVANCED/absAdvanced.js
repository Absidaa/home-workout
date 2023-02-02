import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AbsAdvanced() {
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
            <div className={styles.phoneView}>
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/absad.jpeg"}
                height={170}
                width={320}
                className={styles.absAdvancedLayOutImage}
              />
            </div>
            <div className={styles.absAdvancedLayOut}>ABS ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.absAdvancedLayOutBackButoon}>
                <div>←</div>
              </button>
            </Link>
            <h4 className={styles.absAdvancedSetOfWorkOut}>Set of Workouts</h4>
            <hr className={styles.absAdvancedLayOutHorizontalLine} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.absAdvancedLayOutTime}>
              ▼25 mins • 19 workouts
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
            alt="the pic of the greatest guy ever"
            src="/sitUpGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.bplk}>SIT-UPS</div>
          <div className={styles.x}>x20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/SidePlankHipLiftGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>SIDE BRIDGES LEFT</div>
          <div className={styles.x}>x20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/SidePlankHipRightGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>SIDE BRIDGES RIGHT</div>
          <div className={styles.x}>x20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/crunchGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>ABDOMINAL CRUNCHES</div>
          <div className={styles.x}>x30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/bicycleCrunchesGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>BICYCLE CRUNCHES</div>
          <div className={styles.x}>x24</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/sidePlankLeftGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>SIDE PLANK LEFT</div>
          <div className={styles.sec}>00:20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/sidePlankRightGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>SIDE PLANK RIGHT</div>
          <div className={styles.sec}>00:20</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/vUpGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.bplk}>V-UP</div>
          <div className={styles.x}>x18</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/pushUpRotationGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>PUSH-UPS AND ROTATION</div>
          <div className={styles.x}>x24</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/russiantwistGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.btwist}>RUSSIAN TWIST</div>
          <div className={styles.sec}>00:20</div>
          <hr className={styles.vrs} />

          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/buttBridgGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.btwist}>BUTTS BRIDGE</div>
          <div className={styles.x}>x30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/heeltouchGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.bleg}>HEEL TOUCH</div>
          <div className={styles.x}>x34</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/mountainclimberGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>MOUNTAIN CLIMBER</div>
          <div className={styles.x}>x30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/crossoverCrunchGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>CROSSOVER CRUNCH</div>
          <div className={styles.x}>x24</div>
          <hr className={styles.vrs} />

          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/plankGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.bplk}>PLANK</div>
          <div className={styles.sec}>1:00</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/CobraStretchGif.gif"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>COBRA STRETCH</div>
          <div className={styles.sec}>00:30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/spineLumbarTwistLeftGif.jpg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>SPINE LUMBER TWIST STRETCH LEFT</div>
          <div className={styles.x}>x30</div>
          <hr className={styles.vrs} />
          <Image
            style={{
              marginLeft: "-30vh",
              marginTop: "10px",
              marginBottom: "-90px",
            }}
            alt="the pic of the greatest guy ever"
            src="/spineLumbarTwistRightGif.jpg"
            height={80}
            width={80}
          />
          <div className={styles.jjak}>SPINE LUMBER TWIST STRETCH RIGHT</div>
          <div className={styles.x}>x24</div>
          <hr className={styles.vrs} />

          <Link href={"/ABSADVANCE/absAdvanStart"}>
            <button className={styles.btn}>
              <div onClick={(e) => handleClick(e, "absBigStart")}>START</div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
