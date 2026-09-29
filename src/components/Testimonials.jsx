"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
export default function Testimonials() {
  const reviews = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Healthcare Specialist",
      review:
        "Raj Biosis has consistently delivered reliable diagnostic equipment with outstanding technical support and timely service.",
    },
    {
      name: "Amit Sharma",
      role: "Lab Director",
      review:
        "Professional team, premium quality products and excellent consultation throughout our laboratory setup.",
    },
    {
      name: "Neha Verma",
      role: "Research Head",
      review:
        "The biomedical solutions improved our laboratory workflow and increased operational efficiency.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#F7FCFB] overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#CCFBF1] blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#DCFCE7] blur-3xl opacity-60"></div>

      <div className="container-custom relative z-10">

        <SectionTitle
          badge="Testimonials"
          title="What Our Clients Say"
          description="Trusted by hospitals, laboratories and healthcare professionals across India."
          center
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-[28px] border border-[#D6F5EE] p-8 hover:border-[#0F766E] hover:shadow-2xl transition-all duration-300"
            >

              {/* Quote Icon */}

              <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] text-[#0F766E] flex items-center justify-center mb-6 group-hover:bg-[#0F766E] group-hover:text-white transition">

                <Quote size={26} />

              </div>

              {/* Stars */}

              <div className="flex gap-1 mb-5 text-[#F59E0B]">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="text-[#64748B] leading-8 italic">

                "{item.review}"

              </p>

              {/* Divider */}

              <div className="w-16 h-1 rounded-full bg-[#0F766E] mt-8 mb-6"></div>

              {/* User */}

              <div>

                <h4 className="text-xl font-bold text-[#0F172A]">
                  {item.name}
                </h4>

                <p className="text-[#0F766E] font-medium mt-1">
                  {item.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}