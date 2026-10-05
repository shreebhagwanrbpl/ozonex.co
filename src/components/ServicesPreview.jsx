"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  FlaskConical,
  ShieldCheck,
  Stethoscope,
  Wrench,
  Activity,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SectionTitle from "./SectionTitle";

const DEFAULT_SERVICES = [
  {
    title: "Diagnostic Equipment",
    desc: "Advanced diagnostic systems for hospitals, laboratories and healthcare facilities.",
  },
  {
    title: "Laboratory Solutions",
    desc: "Complete laboratory instruments designed for precision and reliability.",
  },
  {
    title: "Maintenance Support",
    desc: "Preventive maintenance, calibration and technical support for biomedical systems.",
  },
];

const ICONS = [
  <Microscope size={28} key="microscope" />,
  <FlaskConical size={28} key="flask" />,
  <ShieldCheck size={28} key="shield" />,
  <Stethoscope size={28} key="stethoscope" />,
  <Wrench size={28} key="wrench" />,
  <Activity size={28} key="activity" />,
];

export default function ServicesPreview({ city = "" }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const pathParts = pathname ? pathname.split("/").filter(Boolean) : [];
  const staticRoutes = [
    "about",
    "services",
    "products",
    "contact",
    "items",
    "enquiry",
  ];
  const urlDistrict =
    pathParts.length > 0 && !staticRoutes.includes(pathParts[0])
      ? pathParts[0]
      : "";
  const districtSlug = city
    ? city.toLowerCase().replace(/\s+/g, "-")
    : urlDistrict;

  const makeLink = (path) => {
    if (!districtSlug) return path;
    if (path === "/") return `/${districtSlug}`;
    return `/${districtSlug}${path}`;
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/site-data?pageType=services", {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" },
        });
        const json = await response.json().catch(() => ({}));
        if (
          json?.data?.services &&
          Array.isArray(json.data.services) &&
          json.data.services.length > 0
        ) {
          setServices(json.data.services.slice(0, 3));
        } else {
          setServices(DEFAULT_SERVICES);
        }
      } catch (error) {
        console.error("Failed to load services for home preview:", error);
        setServices(DEFAULT_SERVICES);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const displayServices =
    services.length > 0 ? services.slice(0, 3) : DEFAULT_SERVICES;

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

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[28px] border border-[#D6F5EE] p-8 animate-pulse shadow-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-200 mb-6"></div>
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-4 bg-slate-200 rounded"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                  </div>
                  <div className="h-5 bg-slate-200 rounded w-1/3"></div>
                </div>
              ))
            : displayServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-[28px] border border-[#D6F5EE] p-8 hover:border-[#0F766E] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-[#ECFDF5] flex items-center justify-center text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition">
                      {ICONS[index % ICONS.length]}
                    </div>

                    <h3 className="text-2xl font-bold text-[#0F172A] mt-6 mb-4">
                      {service.title || service.name}
                    </h3>

                    <p className="text-[#64748B] leading-7">
                      {service.desc || service.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={makeLink("/services")}
                      className="inline-flex items-center gap-2 text-[#0F766E] font-semibold group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link href={makeLink("/services")}>
            <button className="bg-[#0F766E] hover:bg-[#115E59] text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}