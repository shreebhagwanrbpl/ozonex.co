"use client";
import { motion } from "framer-motion";
import {
  Users,
  FlaskConical,
  BadgeCheck,
  Building2,
} from "lucide-react";
export default function StatsSection() {
  const stats = [
    {
      icon: <Building2 size={30} />,
      number: "10+",
      label: "Years Experience",
    },
    {
      icon: <FlaskConical size={30} />,
      number: "500+",
      label: "Biomedical Products",
    },
    {
      icon: <Users size={30} />,
      number: "200+",
      label: "Happy Clients",
    },
    {
      icon: <BadgeCheck size={30} />,
      number: "100%",
      label: "Quality Assurance",
    },
  ];

  return (
    <section className="py-24 bg-[#F7FCFB]">

      <div className="container-custom">

        <div className="bg-white border border-[#D6F5EE] rounded-[32px] shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-4 md:grid-cols-2">

            {stats.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                className="group relative p-10 text-center border-b md:border-b-0 md:border-r last:border-r-0 border-[#ECFDF5] hover:bg-[#F0FDFA] transition-all duration-300"
              >

                {/* Top Accent */}

                <div className="absolute top-0 left-0 w-full h-1 bg-[#0F766E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                {/* Icon */}

                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#ECFDF5] text-[#0F766E] flex items-center justify-center group-hover:bg-[#0F766E] group-hover:text-white transition">

                  {item.icon}

                </div>

                {/* Number */}

                <h3 className="mt-6 text-5xl font-black text-[#0F172A]">

                  {item.number}

                </h3>

                {/* Label */}

                <p className="mt-3 text-[#64748B] font-medium">

                  {item.label}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}