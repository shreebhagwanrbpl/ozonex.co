"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
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
    badge: "",
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const snap = await (async () => {
          const response = await fetch("/api/site-data?pageType=home", { cache: "no-store", headers: { "Cache-Control": "no-cache" } });
          const json = await response.json().catch(() => ({}));
          return { exists: () => !!json.data, data: () => json.data || {} };
        })();

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

          {heroData.badge ? (
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#D1FAE5] shadow-md text-[#0F766E] font-medium">
              <ShieldCheck size={18} />
              {heroData.badge}
            </span>
          ) : null}

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

            {heroData.button1Text ? <Link href={makeLink("/items")}>

              <button className="bg-[#0F766E] hover:bg-[#115E59] text-white rounded-xl px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-105">

                {heroData.button1Text}

              </button>

            </Link> : null}

            {heroData.button2Text ? <Link href={makeLink("/contact")}>

              <button className="bg-white border-2 border-[#D1FAE5] hover:border-[#0F766E] hover:bg-[#ECFDF5] rounded-xl px-8 py-4 font-semibold text-[#0F172A] transition-all duration-300">

                {heroData.button2Text}

              </button>

            </Link> : null}

          </div>

        </motion.div>
      </div>

    </section>
  );
}