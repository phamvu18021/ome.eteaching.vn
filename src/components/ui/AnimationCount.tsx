"use client"; // Nếu dùng Next.js App Router

import { motion, useSpring} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AnimationCount = ({
  number,
  time,
  text
}: {
  number: any;
  time: number;
  text?: string;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  // Tạo giá trị động với thời gian tùy chỉnh
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: time
  });

  useEffect(() => {
    if (inView) {
      springValue.set(number); // Khi vào màn hình, chạy từ 0 đến `number`
    }
  }, [inView, springValue, number]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setCount(latest); // Cập nhật số thập phân
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.h2  style={{ fontSize: "2.25rem", fontWeight: "bold", color: "white" }} ref={ref}>
      {count.toFixed(0)}
      {text || ""} {/* Hiển thị số thập phân với 2 chữ số sau dấu phẩy */}
    </motion.h2>
  );
};

export default AnimationCount;
