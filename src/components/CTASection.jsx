"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export default function CTASection({ city }) {

  const pathname = usePathname();

  const staticRoutes = [
    "about",
    "services",
    "products",
    "contact",
    "items",
    "enquiry",
  ];

  const pathParts = pathname
    .split("/")
    .filter(Boolean);

  const urlDistrict =
    pathParts.length > 0 &&
      !staticRoutes.includes(pathParts[0])
      ? pathParts[0]
      : "";

  const districtSlug = city
    ? city.toLowerCase().replace(/\s+/g, "-")
    : urlDistrict;

  const makeLink = (path) => {
    if (!districtSlug) return path;

    if (path === "/") {
      return `/${districtSlug}`;
    }

    return `/${districtSlug}${path}`;
  };

  return (
    <section className="py-24 bg-[#F7FCFB]">

      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[36px] border border-[#D6F5EE] bg-white shadow-xl"
        >

          {/* Background Glow */}

          <div className="absolute -top-32 -right-32 w-[350px] h-[350px] rounded-full bg-[#CCFBF1] blur-3xl opacity-70"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-16 relative z-10">

            {/* Left */}

            <div>

              <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#ECFDF5] text-[#0F766E] font-semibold">

                Ready to Get Started?

              </span>

              <h2 className="mt-6 text-4xl lg:text-5xl font-black leading-tight text-[#0F172A]">

                Looking for Reliable Biomedical Equipment?

              </h2>

              <p className="mt-6 text-lg leading-8 text-[#64748B] max-w-xl">

                Our specialists help hospitals, laboratories and healthcare
                organisations choose the right biomedical equipment with reliable
                support and quality service.

              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link href={makeLink("/contact")}>

                  <button className="bg-[#0F766E] hover:bg-[#115E59] text-white px-8 py-4 rounded-xl font-semibold transition flex items-center gap-2">

                    Contact Us

                    <ArrowRight size={18} />

                  </button>

                </Link>

                <a
                  href="tel:+919876543210"
                  className="border-2 border-[#D6F5EE] hover:border-[#0F766E] hover:bg-[#ECFDF5] px-8 py-4 rounded-xl font-semibold text-[#0F172A] transition"
                >
                  Call Now
                </a>

              </div>

            </div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl bg-[#F7FCFB] border border-[#D6F5EE] p-8 text-center">

                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#ECFDF5] text-[#0F766E] flex items-center justify-center mb-5">

                  <PhoneCall size={30} />

                </div>

                <h3 className="text-4xl font-black text-[#0F172A]">
                  24×7
                </h3>

                <p className="mt-2 text-[#64748B]">
                  Expert Support
                </p>

              </div>

              <div className="rounded-3xl bg-[#F7FCFB] border border-[#D6F5EE] p-8 text-center">

                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#ECFDF5] text-[#0F766E] flex items-center justify-center mb-5">

                  <ArrowRight size={30} />

                </div>

                <h3 className="text-4xl font-black text-[#0F172A]">
                  500+
                </h3>

                <p className="mt-2 text-[#64748B]">
                  Products Delivered
                </p>

              </div>

              <div className="rounded-3xl bg-[#F7FCFB] border border-[#D6F5EE] p-8 text-center">

                <h3 className="text-4xl font-black text-[#0F172A]">
                  10+
                </h3>

                <p className="mt-2 text-[#64748B]">
                  Years Experience
                </p>

              </div>

              <div className="rounded-3xl bg-[#F7FCFB] border border-[#D6F5EE] p-8 text-center">

                <h3 className="text-4xl font-black text-[#0F172A]">
                  100%
                </h3>

                <p className="mt-2 text-[#64748B]">
                  Quality Assurance
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}