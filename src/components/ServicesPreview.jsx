"use client";
import { motion } from "framer-motion";
import {
  Microscope,
  FlaskConical,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
export default function ServicesPreview() {
  const services = [
    {
      icon: <Microscope size={28} />,
      title: "Diagnostic Equipment",
      description:
        "Advanced diagnostic systems for hospitals, laboratories and healthcare facilities.",
    },
    {
      icon: <FlaskConical size={28} />,
      title: "Laboratory Solutions",
      description:
        "Complete laboratory instruments designed for precision and reliability.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Maintenance Support",
      description:
        "Preventive maintenance, calibration and technical support for biomedical systems.",
    },
    {
      icon: <Stethoscope size={28} />,
      title: "Healthcare Consultation",
      description:
        "Professional consultation to help choose the right biomedical equipment.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#F7FCFB] overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#CCFBF1] blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#DCFCE7] blur-3xl opacity-60"></div>

      <div className="container-custom relative z-10">

        <SectionTitle
          badge="Our Services"
          title="Premium Diagnostic & Biomedical Services"
          description="Innovative biomedical equipment, laboratory systems and healthcare solutions tailored for modern medical facilities."
          center
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-[28px] border border-[#D6F5EE] p-8 hover:border-[#0F766E] hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex gap-6">

                <div className="w-16 h-16 rounded-2xl bg-[#ECFDF5] flex items-center justify-center text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition">

                  {service.icon}

                </div>

                <div className="flex-1">

                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-[#64748B] leading-8">
                    {service.description}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 text-[#0F766E] font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">

          <Link href="/services">

            <button className="bg-[#0F766E] hover:bg-[#115E59] text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105">

              View All Services

            </button>

          </Link>

        </div>

      </div>

    </section>
  );
}