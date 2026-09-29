"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Microscope,
  HeartPulse,
  BadgeCheck,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
export default function WhyChooseUs() {
  const features = [
    {
      icon: <Microscope size={30} />,
      title: "Advanced Technology",
      description:
        "State-of-the-art biomedical and diagnostic equipment for modern healthcare facilities.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Certified Quality",
      description:
        "Every solution meets strict quality standards to ensure reliability and performance.",
    },
    {
      icon: <HeartPulse size={30} />,
      title: "Healthcare First",
      description:
        "Designed to support hospitals, laboratories and diagnostic centres with confidence.",
    },
    {
      icon: <BadgeCheck size={30} />,
      title: "Dedicated Support",
      description:
        "Fast installation, technical guidance and dependable after-sales service.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#F7FCFB] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[350px] h-[350px] rounded-full bg-[#CCFBF1] blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-[#DCFCE7] blur-3xl opacity-60"></div>
      </div>

      <div className="container-custom relative z-10">

        <SectionTitle
          badge="Why Choose Us"
          title="Trusted Biomedical Excellence"
          description="Delivering advanced biomedical solutions with innovation, precision and dependable service."
          center
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-white border border-[#D6F5EE] rounded-[28px] p-8 hover:border-[#0F766E] hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex items-start gap-6">

                <div className="w-16 h-16 rounded-2xl bg-[#ECFDF5] text-[#0F766E] flex items-center justify-center group-hover:bg-[#0F766E] group-hover:text-white transition">

                  {item.icon}

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3">

                    {item.title}

                  </h3>

                  <p className="text-[#64748B] leading-8">

                    {item.description}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}