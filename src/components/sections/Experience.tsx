import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";

export const Experience = () => {
  return (
    <section id="experience" className="relative py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-12"
      >
        Experience
      </motion.h2>


      <div className="space-y-14 ">
        {experiences.map((exp, index) => (
          <div key={exp.company} className="relative">

            <Card exp={exp} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};
