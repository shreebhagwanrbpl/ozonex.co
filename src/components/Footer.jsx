"use client";
import { useEffect, useState } from "react";
import { getContactValue, parseContactValues, phoneHref, mailHref } from "@/lib/contact-utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
export default function Footer() {
  const [contactInfo, setContactInfo] =
    useState([]);
  const [loading, setLoading] = useState(true);
  const [districtData, setDistrictData] =
    useState(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch("/api/catalog", {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" },
        });
        const json = await res.json().catch(() => ({}));
        if (
          json?.categories &&
          Array.isArray(json.categories) &&
          json.categories.length > 0
        ) {
          const catNames = json.categories
            .map((c) => c.category || c.name || c.id || c)
            .filter(Boolean);
          setCategories(catNames);
        } else if (
          json?.products &&
          Array.isArray(json.products) &&
          json.products.length > 0
        ) {
          const uniqueCats = Array.from(
            new Set(json.products.map((p) => p.category).filter(Boolean))
          );
          setCategories(uniqueCats);
        } else {
          setCategories([
            "Electrolyte Reagents",
            "Rapid Test Kits",
            "Hematology",
            "Biomedical Equipment",
            "Laboratory Solutions",
          ]);
        }
      } catch (err) {
        console.error("Failed to load categories for footer:", err);
        setCategories([
          "Electrolyte Reagents",
          "Rapid Test Kits",
          "Hematology",
          "Biomedical Equipment",
          "Laboratory Solutions",
        ]);
      }
    };

    loadCategories();
  }, []);

  const pathname = usePathname();

  const pathParts = pathname ? pathname.split("/").filter(Boolean) : [];

  const staticRoutes = [
    "about",
    "services",
    "products",
    "contact",
    "items",
  ];

  const district =
    pathParts.length > 0 &&
      !staticRoutes.includes(pathParts[0])
      ? pathParts[0]
      : "";

  useEffect(() => {
    const loadContact = async () => {
      try {
        const snap = await (async () => {
          const response = await fetch("/api/site-data?pageType=contact", { cache: "no-store", headers: { "Cache-Control": "no-cache" } });
          const json = await response.json().catch(() => ({}));
          return { exists: () => !!json.data, data: () => json.data || {} };
        })();

        if (snap.exists()) {
          setContactInfo(
            snap.data().contactInfo || []
          );
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    loadContact();
  }, []);

  useEffect(() => {
    const loadDistrict = async () => {
      if (!district) return;

      try {
        const snap = await (async () => {
          const response = await fetch(`/api/site-data?pageType=district&district=${encodeURIComponent(district)}`, { cache: "no-store", headers: { "Cache-Control": "no-cache" } });
          const json = await response.json().catch(() => ({}));
          return { exists: () => !!json.data, data: () => json.data || {} };
        })();

        if (snap.exists()) {
          setDistrictData(snap.data());
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadDistrict();
  }, [district]);

  const phone = getContactValue(contactInfo, ["Phone", "Phone Number", "Mobile", "Mobile Number", "Contact"]);
  const phoneNumbers = parseContactValues(phone);
  const email = getContactValue(contactInfo, ["Email", "Email Address", "Mail"]);
  const emailAddresses = parseContactValues(email);

  const address =
    contactInfo.find(
      (x) => x.label === "Address"
    )?.value || "";

  const dynamicAddress =
    districtData
      ? `${districtData.district}, ${districtData.state}, India`
      : address;

  const makeLink = (path) => {
    if (!district) return path;

    if (path === "/") {
      return `/${district}`;
    }

    return `/${district}${path}`;
  };
  if (loading) {
    return (
      <footer className="bg-white border-t border-slate-200">
        <div className="container-custom py-16">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="h-8 w-40 bg-slate-200 rounded animate-pulse mb-6" />

                {[...Array(5)].map((_, j) => (
                  <div
                    key={j}
                    className="h-5 bg-slate-200 rounded animate-pulse mb-4"
                  />
                ))}
              </div>
            ))}

          </div>

          <div className="border-t border-slate-200 mt-12 pt-6">
            <div className="h-5 w-72 bg-slate-200 rounded animate-pulse" />
          </div>

        </div>
      </footer>
    );
  }
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container-custom py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-sky-700">
              Raj
              <span className="text-slate-900">
                {" "}Biosis
              </span>
            </h2>

            <p className="mt-5 text-slate-600 leading-7">
              Delivering trusted diagnostic
              and biomedical solutions with
              innovation, quality, and
              precision healthcare support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-600">

              <Link href={makeLink("/")}>
                Home
              </Link>

              <Link href={makeLink("/about")}>
                About
              </Link>

              <Link href={makeLink("/services")}>
                Services
              </Link>

              <Link href={makeLink("/items")}>
                Products
              </Link>

              <Link href={makeLink("/contact")}>
                Contact
              </Link>

            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Products
            </h3>

            <div className="flex flex-col gap-3 text-slate-600">
              {categories.slice(0, 6).map((catName, index) => (
                <Link
                  key={index}
                  href={makeLink(`/items?category=${encodeURIComponent(catName)}`)}
                  className="hover:text-sky-700 transition"
                >
                  {catName}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-slate-600">

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-sky-700"
                />
                <p>{dynamicAddress}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-sky-700"
                />
                <div>{phoneNumbers.map((number, index) => <a key={index} href={phoneHref(number) || "#"} className="block">{number}</a>)}</div>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-sky-700"
                />
                <div>{emailAddresses.map((address, index) => <a key={index} href={mailHref(address) || "#"} className="block">{address}</a>)}</div>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">

          <p>
            © 2026 Raj Biosis.
            All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Designed with precision for
            modern diagnostics.
          </p>

        </div>

      </div>
    </footer>
  );
}