import { motion } from "framer-motion";
// import { staggerChildren, wordAnimation2 } from "./animations";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type } from "os";

type AnimatedWords2Props = {
  title: string;
  style: string;
};

const AnimatedWords2: React.FC<AnimatedWords2Props> = ({ title, style }) => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("animate");
    }
    if (!inView) {
      ctrls.start("initial");
    }
  }, [ctrls, inView]);

  const wordAnimation2 = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 0.8,
      },
    },
  };

  const staggerChildren = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <h1 aria-label={title} role="heading">
      <motion.span
        className="flex max-w-[500px] flex-col items-start text-left text-[150px]  font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[160px] md:text-[190px] lg:text-center lg:text-[390px]"
        ref={ref}
      >
        {title.split(" ").map((word, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate={ctrls}
            //   variants={staggerChildren}
            className="flex items-center justify-center overflow-hidden last:-mr-10"
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            <motion.span className={style} variants={wordAnimation2}>
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimatedWords2;
