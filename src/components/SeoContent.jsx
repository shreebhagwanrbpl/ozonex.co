export default function SeoContent({ city = "" }) {
    const location = city || "India";

    const faqs = [
        {
            q: "Do you supply biomedical equipment across India?",
            a: "Yes. We supply biomedical and laboratory equipment to hospitals, pathology laboratories, diagnostic centres and healthcare institutions across multiple cities and districts.",
        },
        {
            q: "Which laboratory instruments do you provide?",
            a: "We provide CBC Machines, Hematology Analyzers, Biochemistry Analyzers, Urine Analyzers, ELISA Readers and various diagnostic laboratory instruments.",
        },
        {
            q: "Do you provide installation and technical support?",
            a: "Yes. Our team provides installation guidance, technical assistance and after-sales support depending on the product and service location.",
        },
        {
            q: "Who can purchase biomedical equipment?",
            a: "Hospitals, pathology laboratories, clinics, diagnostic centres, research institutes and healthcare organisations can purchase equipment from us.",
        },
    ];

    return (
        <section className="py-24 bg-[#F7FCFB]">

            <div className="container-custom">

                {/* Content */}

                <div className="max-w-5xl mx-auto bg-white rounded-[32px] border border-[#D6F5EE] shadow-lg p-8 lg:p-14">

                    <span className="inline-block px-5 py-2 rounded-full bg-[#ECFDF5] text-[#0F766E] font-semibold">
                        Knowledge Center
                    </span>

                    <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight">
                        Biomedical Equipment Supplier in {location}
                    </h2>

                    <div className="mt-10 space-y-7 text-lg leading-9 text-[#475569]">

                        <p>
                            Raj Biosis is a trusted supplier of biomedical and
                            laboratory equipment in <strong>{location}</strong>. We provide
                            CBC Machines, Hematology Analyzers, Biochemistry Analyzers,
                            Urine Analyzers, ELISA Readers and other advanced diagnostic
                            systems for hospitals, pathology laboratories and healthcare
                            institutions.
                        </p>

                        <p>
                            Our objective is to deliver dependable biomedical solutions that
                            improve laboratory efficiency and diagnostic accuracy. We work
                            closely with hospitals, diagnostic centres, clinics and research
                            laboratories by providing high-quality products supported by
                            expert guidance.
                        </p>

                        <p>
                            Along with supplying equipment, we also assist with product
                            selection, installation guidance and technical support to help
                            healthcare professionals choose the right solution for their
                            laboratory requirements.
                        </p>

                        <p>
                            Whether you are establishing a new diagnostic laboratory or
                            upgrading existing biomedical systems, our experienced team is
                            committed to providing reliable products and dependable service
                            throughout {location}.
                        </p>

                    </div>

                </div>

                {/* FAQ */}

                <div className="max-w-5xl mx-auto mt-16">

                    <h2 className="text-4xl font-black text-[#0F172A] text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-5">

                        {faqs.map((faq, index) => (

                            <div
                                key={index}
                                className="bg-white border border-[#D6F5EE] rounded-2xl p-7 hover:border-[#0F766E] transition-all duration-300"
                            >

                                <h3 className="text-xl font-bold text-[#0F172A]">
                                    {faq.q}
                                </h3>

                                <p className="mt-3 text-[#64748B] leading-8">
                                    {faq.a}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}