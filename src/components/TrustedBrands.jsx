export default function TrustedBrands() {
  const brands = [
    "HealthCare+",
    "BioMed Labs",
    "MediCore",
    "Life Diagnostics",
    "Care Plus",
  ];

  return (
    <section className="py-20 bg-white">

      <div className="container-custom">

        <div className="text-center mb-14">

          <span className="inline-block px-5 py-2 rounded-full bg-[#ECFDF5] text-[#0F766E] font-semibold">
            Our Trusted Network
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900">
            Trusted Across Healthcare
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Supplying reliable biomedical equipment and laboratory solutions
            to hospitals, diagnostic centres and healthcare institutions.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-5">

          {brands.map((brand, index) => (

            <div
              key={index}
              className="px-10 py-6 rounded-full border border-[#D1FAE5] bg-[#F7FCFB]
              hover:bg-[#0F766E] hover:text-white hover:scale-105
              transition-all duration-300 cursor-pointer font-bold text-lg shadow-sm"
            >
              {brand}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}