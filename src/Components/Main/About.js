import React from "react";

const About = () => {
  const pillars = [
    {
      title: "People First",
      description:
        "Every screen, workflow, and alert is designed to keep patients, donors, and bank teams informed and confident.",
    },
    {
      title: "Trust through Technology",
      description:
        "Secure authentication, transparent histories, and live stock updates mean no guesswork when lives are on the line.",
    },
    {
      title: "Actionable Insight",
      description:
        "From camp schedules to donor readiness reminders, RedHope highlights the next best step so help arrives faster.",
    },
  ];

  return (
    <div className="text-white py-16 px-6 lg:px-20" style={{ background: "linear-gradient(135deg, #ffd6d9, #fff3c4)" }}>
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <p className="text-4xl font-extrabold tracking-tight text-red-200 underline decoration-red-500">
            Welcome to RedHope
          </p>
          <p className="text-lg leading-relaxed">
            RedHope is a modern platform dedicated to making blood donation simple, safe, and impactful. We connect
            compassionate donors with those in need, fostering a community of hope and health. By pairing intuitive
            digital tools with verified medical partners, we eliminate uncertainty and help teams focus on what matters
            most—saving lives.
          </p>
          <p className="text-lg leading-relaxed">
            From onboarding new donors to routing critical blood units, our mission is to empower lives and inspire
            generosity through technology and care. Whether you are a first-time volunteer or a seasoned bank
            administrator, RedHope provides the clarity, coordination, and confidence required during urgent moments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white/10 rounded-2xl p-6 shadow-xl border border-white/20">
              <p className="text-2xl font-semibold text-red-200 mb-2">{pillar.title}</p>
              <p className="text-base leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/20 space-y-6">
          <p className="text-2xl font-semibold">What you can do inside RedHope</p>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>Track nearby donation camps, book a slot, and receive reminders on hydration and eligibility.</li>
            <li>Discover accredited blood banks, review their stock status, and raise urgent requests in minutes.</li>
            <li>Maintain a unified donor profile with medical history, past appointments, and post-donation guidance.</li>
            <li>Coordinate with hospitals through secure channels, ensuring every unit is accounted for and traceable.</li>
          </ul>
        </div>

        <div className="text-center space-y-2">
          <p className="text-lg">
            Together we are building a responsive, data-driven blood donation network for every city and every village.
            If you believe in compassionate innovation, RedHope is your platform.
          </p>
          <p className="text-sm text-white/70">
            Have ideas that can improve the experience? Reach out—we are constantly expanding integrations with
            hospitals, civic groups, and emergency responders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
