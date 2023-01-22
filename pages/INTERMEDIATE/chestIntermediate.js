import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function absBeginner() {
  const handleClick = (e, path) => {
    if (path === "/cheInterStart") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <div className={styles.bdy}>
      <div className={styles.bbdy}>
        <div className={styles.absb}>
          <div className={styles.phoneView}>
            <Image
              style={{ borderRadius: "20px" }}
              alt="guy"
              src={"/cheinter.jpeg"}
              height={170}
              width={308}
              className={styles.im6}
            />
          </div>
          <div className={styles.abs3}>CHEST INTERMEDIATE</div>

          <Link href={"/"}>
            <button className={styles.back7}>
              <div>←</div>
            </button>
          </Link>
          <h4 className={styles.bgset6}>Set of workouts</h4>
          <hr className={styles.vrchein} />
        </div>
        <div className={styles.worksb} class="card">
          <h5 className={styles.time}>▼11 mins • 13 workouts</h5>
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
          src="/ArmCirclesGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.btwist}>ARM CIRCLES </div>
        <div className={styles.x}>x20</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/shoulderStretchGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>SHOULDER STRETCH</div>
        <div className={styles.sec}>00:30</div>
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
        <div className={styles.bleg}>BURPEES</div>
        <div className={styles.x}>x10</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/staggeredPushUpGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>STAGGERED PUSH-UPS</div>
        <div className={styles.x}>x16</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/hinduPushUpGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>HINDU PUSH-UPS</div>
        <div className={styles.x}>x16</div>
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
        <div className={styles.jjak}>PUSH-UPS & ROTATION</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/diamondPushUpGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>DIAMOND PUSH-UPS</div>
        <div className={styles.x}>X16</div>
        <hr className={styles.vrs} />

        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/boxPushUpGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.btwist}>BOX PUSH-UPS</div>
        <div className={styles.x}>x12</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/spidermanPushUpGif.gif"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>SPIDERMAN PUSH-UPS</div>
        <div className={styles.x}>x20</div>
        <hr className={styles.vrs} />
        <Image
          style={{
            marginLeft: "-30vh",
            marginTop: "10px",
            marginBottom: "-90px",
          }}
          src="/declinePushUpGif.gif"
          height={80}
          width={80}
        />
        <div className={styles.jjak}>DECLINED PUSH-UPS</div>
        <div className={styles.x}>x12</div>
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
          src="/chestreh.jpeg"
          height={80}
          width={80}
        />

        <div className={styles.jjak}>CHEST STRETECH</div>
        <div className={styles.sec}>00:30</div>
        <hr className={styles.vrs} />

        <Link href={"/CHESTINTERMEDIATE/cheInterStart"}>
          <button className={styles.btn}>
            <div onClick={(e) => handleClick(e, "cheInterStart")}>START</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default absBeginner;
