import React, { useEffect, useRef, useState } from "react";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `These terms and conditions outline the rules and regulations for the use of OLI’S PVT LTD’s Website, located at https://olisfoods.com/.
    By accessing this website we assume you accept these terms and conditions. Do not continue to use OLI’S FOODS if you do not agree to take all of the terms and conditions stated on this page.`,
  },
  {
    id: "terminology",
    title: "Terminology",
    content: `The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice, and all Agreements: 
    “Client”, “You” and “Your” refers to you, the person log on to this website and is compliant with the Company’s terms and conditions. 
    “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves.`,
  },
  {
    id: "cookies",
    title: "Cookies",
    content: `We employ the use of cookies. By accessing OLI’S FOODS, you agree to use cookies in agreement with OLI’S PVT LTD’s Privacy Policy.`,
  },
  {
    id: "license",
    title: "License",
    content: `Unless otherwise stated, OLI’S PVT LTD and/or its licensors own the intellectual property rights for all material on OLI’S FOODS. 
    All intellectual property rights are reserved.`,
  },
  {
    id: "comments",
    title: "Comments",
    content: `Parts of this website offer an opportunity for users to post and exchange opinions and information. 
    We reserve the right to monitor and remove any Comments considered inappropriate, offensive, or in breach of these Terms.`,
  },
  {
    id: "hyperlinking",
    title: "Hyperlinking to Our Content",
    content: `Certain organizations may link to our Website without prior written approval. 
    Approved organizations may hyperlink using our corporate name, the website URL, or other appropriate descriptions.`,
  },
];

const TermsAndConditionsPage = () => {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((sec) => observer.observe(sec));

    return () => {
      sectionRefs.current.forEach((sec) => observer.unobserve(sec));
    };
  }, [isScrolling]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveId(id);
    setIsScrolling(true);

    el.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      setIsScrolling(false);
    }, 900);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <aside className="hidden lg:block">
          <nav className="sticky top-28">
            <h3 className="text-gray-800 font-semibold mb-4">On this page</h3>
            <ul className="space-y-3 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left px-2 py-1 rounded transition-colors ${
                      activeId === s.id
                        ? "text-[#CE0043] font-semibold"
                        : "text-gray-600 hover:text-[#CE0043]"
                    }`}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="lg:col-span-3">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Privacy <span className="text-[#CE0043]">Policy</span>
            </h1>
            <p className="text-sm text-gray-600">Last updated: August 2025</p>
          </header>

          <article className="space-y-12">
            {sections.map((section, idx) => (
              <section
                id={section.id}
                key={section.id}
                ref={addToRefs}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-start gap-3">
                  <span className="text-[#CE0043] font-bold text-2xl">
                    {idx + 1}.
                  </span>
                  {section.title}
                </h2>

                <div className="prose prose-sm sm:prose lg:prose-lg text-gray-700">
                  {section.content
                    .split("\n")
                    .map((line, i) =>
                      line.trim() === "" ? (
                        <br key={i} />
                      ) : (
                        <p key={i}>{line}</p>
                      )
                    )}
                </div>
              </section>
            ))}
          </article>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
