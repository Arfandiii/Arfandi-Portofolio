/* eslint-disable no-unused-vars */
import { listProyek } from "../../data";
import Link from "./Link";
import { motion } from "framer-motion";
export const HoverImageLinks = () => {
  return (
    <section className="p-4 md:p-8 dark:text-zinc-200">
      {listProyek.map((item) => (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            duration: 0.5,
            delay: item.id * 0.2,
          }}
          className="mx-0 lg:mx-20">
          <Link
            key={item.id}
            heading={item.nama}
            subheading={item.desk}
            imgSrc={item.gambar}
            href={item.href}
          />
        </motion.div>
      ))}
    </section>
  );
};
export default HoverImageLinks;
