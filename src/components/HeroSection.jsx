"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

import CBG from "../components/img/CBG.png";

import {
  ArrowRight,
  ShieldCheck,
  Microscope,
  BadgeCheck,
} from "lucide-react";

export default function HeroSection({ city }) {
  const [loading, setLoading] = useState(true);

  const [heroData, setHeroData] = useState({
    title: "",
    description: "",
    button1Text: "",
    button2Text: "",
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const snap = await getDoc(
          doc(db, "websites", "centralbiomedicals", "pages", "home")
        );

        if (snap.exists()) {
          setHeroData(snap.data());
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // District Routing
  const districtSlug = city
    ? city.toLowerCase().replace(/\s+/g, "-")
    : "";

  const makeLink = (path) => {
    return districtSlug ? `/${districtSlug}${path}` : path;
  };

  return (
    <section className="relative overflow-hidden bg-[#F7FCFB]">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-24 h-[500px] w-[500px] rounded-full bg-[#CCFBF1] blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 -left-20 h-[450px] w-[450px] rounded-full bg-[#DCFCE7] blur-3xl opacity-70"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.05),transparent_60%)]"></div>
      </div>

      <div className="container-custom relative z-10 py-24">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >

          {/* Badge */}

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#D1FAE5] shadow-md text-[#0F766E] font-medium">

            <ShieldCheck size={18} />

            Trusted Biomedical Company

          </span>

          {/* Title */}

          <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-[#0F172A]">

            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-12 rounded bg-gray-200"></div>
                <div className="h-12 rounded bg-gray-200 w-3/4 mx-auto"></div>
              </div>
            ) : (
              <>
                {heroData.title}

                {city && (
                  <>
                    <br />

                    <span className="text-[#0F766E]">
                      {city}
                    </span>

                  </>
                )}
              </>
            )}

          </h1>

          {/* Description */}

          {!loading && (

            <p className="mt-8 text-xl leading-9 text-[#475569] max-w-3xl mx-auto">

              {heroData.description}

            </p>

          )}

          {/* Buttons */}

          <div className="flex justify-center flex-wrap gap-4 mt-10">

            <Link href={makeLink("/services")}>

              <button className="bg-[#0F766E] hover:bg-[#115E59] text-white rounded-xl px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-105">

                {heroData.button1Text || "Explore Services"}

              </button>

            </Link>

            <Link href={makeLink("/contact")}>

              <button className="bg-white border-2 border-[#D1FAE5] hover:border-[#0F766E] hover:bg-[#ECFDF5] rounded-xl px-8 py-4 font-semibold text-[#0F172A] transition-all duration-300">

                {heroData.button2Text || "Contact Us"}

              </button>

            </Link>

          </div>

        </motion.div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-24">

          <div className="bg-white rounded-3xl border border-[#D1FAE5] shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <h2 className="text-5xl font-black text-[#0F766E]">
              10+
            </h2>

            <p className="mt-3 text-[#64748B]">
              Years Experience
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-[#D1FAE5] shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <h2 className="text-5xl font-black text-[#0F766E]">
              500+
            </h2>

            <p className="mt-3 text-[#64748B]">
              Products Delivered
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-[#D1FAE5] shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <h2 className="text-5xl font-black text-[#0F766E]">
              24×7
            </h2>

            <p className="mt-3 text-[#64748B]">
              Technical Support
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-[#D1FAE5] shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <h2 className="text-5xl font-black text-[#0F766E]">
              100%
            </h2>

            <p className="mt-3 text-[#64748B]">
              Quality Assurance
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}