import React, { useEffect, useRef, useState } from "react";

const privacySections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `At OLI’SFOODS, accessible from https://olisfoods.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by OLI’SFOODS and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.`,
  },
  {
    id: "scope",
    title: "Scope",
    content: `This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in OLI’SFOODS. This policy is not applicable to any information collected offline or via channels other than this website.`,
  },
  {
    id: "consent",
    title: "Consent",
    content: `By using our website, you hereby consent to our Privacy Policy and agree to its terms.`,
  },
  {
    id: "information",
    title: "Information we collect",
    content: `The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.`,
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    content: `We use the information we collect in various ways, including to:

• Provide, operate, and maintain our website
• Improve, personalize, and expand our website
• Understand and analyze how you use our website
• Develop new products, services, features, and functionality
• Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
• Send you emails
• Find and prevent fraud`,
  },
  {
    id: "logs",
    title: "Log Files",
    content: `OLI’SFOODS follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.`,
  },
  {
    id: "cookies",
    title: "Cookies & Web Beacons",
    content: `Like any other website, OLI’SFOODS uses “cookies”. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors browser type and/or other information.`,
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content: `We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.`,
  },
];

const PrivacyPolicyPage = () => {
  const [activeId, setActiveId] = useState(privacySections[0].id);
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
              {privacySections.map((s) => (
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
            {privacySections.map((section, idx) => (
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

export default PrivacyPolicyPage;
