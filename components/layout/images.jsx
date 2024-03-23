import Image from "next/image";
import styles from "./Images.module.css";


const Images = () => {
  return (
    <div className={`${styles.imagesContainer} animate-fade-up`}>
      <div className={`${styles.imageWrapper} ${styles.imageWrapper1}` }>
        <div className="animate__delay-1s"> {/* Optional delay */}
          <Image
            src="/godess1.png"
            alt="N17R logo"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
      <div className={`${styles.imageWrapper} ${styles.imageWrapper2} `}>
        <div className="animate__delay-2s"> {/* Optional delay */}
          <Image
            src="/godess2.png"
            alt="N17R logo"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
      <div className={`${styles.imageWrapper} ${styles.imageWrapper3} `}>
        <div className="animate__delay-3s"> {/* Optional delay */}
          <Image
            src="/godess3.png"
            alt="N17R logo"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
