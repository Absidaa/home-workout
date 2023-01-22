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
            <div className={styles.phoneView}>
              <Image
                style={{ borderRadius: "20px" }}
                alt="guy"
                src={"/absad.jpeg"}
                height={160}
                width={317}
                className={styles.im11}
              />
            </div>
            <div className={styles.abs7}>ABS ADVANCED</div>

            <Link href={"/"}>
              <button className={styles.back9}>
                <div>←</div>
              </button>
            </Link>
            <h4 className={styles.bgset10}>Set of Workouts</h4>
            <hr className={styles.vrabsa} />
          </div>
          <div className={styles.worksb} class="card">
            <h5 className={styles.time}>▼25 mins • 19 workouts</h5>
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

export default chestBeginner;
