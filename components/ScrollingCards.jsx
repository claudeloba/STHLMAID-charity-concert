import Image from "next/image";
import { motion } from "framer-motion";
import Noise from "@/components/Noise";

export const ScrollingCards = ({ image }) => {
  return (
    <motion.div className="relative overflow-hidden min-w-[110px] min-h-[110px] md:h-[150px] md:min-w-[150px] xl:min-w-[300px] xl:min-h-[300px] rounded-2xl flex justify-center items-center">
      <Image
        src={image}
        alt="description"
        fill
        className="object-cover opacity-70"
      />
      <Noise />
    </motion.div>
  );
};
