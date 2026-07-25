"use client";
import { useState } from "react";
import {
  Cormorant_Garamond,
  Inter,
  Geist_Mono,
} from "next/font/google";


const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
});


const journey = [
  {
    year: "2020",
    title: "The Beginning",
    image: "/journey-01.jpg",
    text:
      "A small-town dreamer started exploring creativity, technology, and storytelling. The first step of a longer journey.",
  },
  {
    year: "2022",
    title: "The Creator",
    image: "/journey-02.png",
    text:
      "Built Bangaliana Entertainment and discovered the power of stories, characters, and communities.",
  },


   {
    year: "2025",
    title: "The Growth Builder",
    image: "/journey-04.jpg",
    text:
      "Joined Cleanomatics Tech Solutions, working on landing pages, marketing systems, CRM workflows, and AI-powered automation. This experience shaped a deeper understanding of how businesses grow through systems and technology.",
  },
  {
    
    year: "NOW",
    title: "The Systems Thinker",
    image: "/journey-03.png",
    text:
      "Building Betazu — where AI, technology, business systems, and human creativity come together.",
  },
];


const projects = [
  {
    name: "Betazu",
    category: "Software · AI",
    description: "AI Productivity Ecosystem",
    link: "https://betazu.com",
  },
  {
    name: "Bangaliana Entertainment",
    category: "Culture · Film",
    description: "Bengali Entertainment & Storytelling",
    link: "https://www.youtube.com/@bangalianaent",
  },
];


const inputClass = `
w-full
bg-transparent
border-b
border-white/20
py-4
outline-none
text-sm
text-white
placeholder:text-white/30
focus:border-white
transition
`;

export default function Page() {

const [success, setSuccess] = useState(false);


const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  const formData = new FormData(e.currentTarget);

const body = {
  name: formData.get("name"),
  email: formData.get("email"),
  phone_number: formData.get("phone_number"),
  company: formData.get("company"),
  what_are_you_looking_for: formData.get("what_are_you_looking_for"),
  project_budget: formData.get("project_budget"),
  timeline: formData.get("timeline"),
  message: formData.get("message"),
};
console.log(body);
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed");
    }

    setSuccess(true);

e.currentTarget.reset();

setTimeout(() => {
  setSuccess(false);
}, 3000);
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};





  return (
    <main className={`${sans.className} bg-[#0a0a0a] text-[#e8e4dc] overflow-hidden`}>

      {/* NAV */}

      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">

        <div className={`${serif.className} text-xl`}>
          BIKRAM
        </div>


        <nav className={`${mono.className} hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] text-white/40`}>
          <a href="#journey">Journey</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

      </header>



      {/* HERO */}

      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">

        <img
  src="/hero.png"
  alt="Bikram Mondal"
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-[center_25%]
  "
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-black/30 to-transparent" />

        <div className="relative z-10 px-6 md:px-12 pb-24 max-w-4xl">

          <p className={`${mono.className} text-[11px] uppercase tracking-[0.35em] text-white/50 mb-8`}>
            Builder · Storyteller · Systems Thinker
          </p>


          <h1 className={`${serif.className} text-[clamp(60px,10vw,110px)] font-light leading-none`}>
            Bikram
            <br />
            <em>Mondal</em>
          </h1>


          <p className="mt-8 max-w-md text-sm leading-8 text-white/60">
            Building intelligent digital systems, brands, and experiences from India —
            where software meets storytelling.
          </p>


          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#work"
              className="border border-[#e8e4dc] px-8 py-4 text-[11px] uppercase tracking-[0.25em]"
            >
              View Work
            </a>


            <a
              href="#contact"
              className="border border-white/20 px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-white/60"
            >
              Contact
            </a>

          </div>

        </div>

      </section>

            {/* JOURNEY */}

      <section
        id="journey"
        className="px-6 md:px-12 py-32 border-t border-white/10"
      >

        <div className="max-w-6xl mx-auto">

          <div className="mb-24">

            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] text-white/40 mb-8`}>
              The Story Behind The Systems
            </p>


            <h2 className={`${serif.className} text-[clamp(48px,8vw,90px)] font-light leading-none`}>
              From stories
              <br />
              <em>to systems.</em>
            </h2>

          </div>



          {journey.map((item, index) => (

            <div
              key={item.year}
              className={`
                grid
                md:grid-cols-2
                gap-12
                md:gap-20
                items-center
                mb-32
                last:mb-0
              `}
            >

              {/* IMAGE */}

              <div
                className={`
                  h-[420px]
                  overflow-hidden
                  ${index % 2 !== 0 ? "md:order-2" : ""}
                `}
              >

                <img
src={item.image}
alt={item.title}
className="
w-full
h-full
object-cover
object-[center_25%]
brightness-95
contrast-105
"
/>
              </div>



              {/* CONTENT */}

              <div
                className={`
                  ${index % 2 !== 0 ? "md:order-1" : ""}
                `}
              >

                <p className={`${serif.className} text-7xl text-white/10`}>
                  {item.year}
                </p>


                <h3 className={`${serif.className} text-4xl font-light mt-4`}>
                  {item.title}
                </h3>


                <p className="mt-6 max-w-sm text-sm leading-8 text-white/50">
                  {item.text}
                </p>


              </div>


            </div>

          ))}


        </div>

      </section>





      {/* SELECTED WORK */}

      <section
        id="work"
        className="px-6 md:px-12 py-32 border-t border-white/10"
      >

        <div className="flex justify-between items-baseline border-b border-white/10 pb-6 mb-16">

          <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] text-white/40`}>
            Selected Work
          </p>


          <p className={`${serif.className} italic text-white/40`}>
            2022 — Present
          </p>

        </div>



        <div>

          {projects.map((project, index) => (

            <a
              key={project.name}
              href={project.link}
              className="
                group
                grid
                grid-cols-1
                md:grid-cols-[60px_1fr_200px_50px]
                items-center
                gap-6
                py-10
                border-b
                border-white/10
                hover:bg-white/[0.03]
                transition
              "
            >

              <span className="text-xs text-white/20">
                0{index + 1}
              </span>



              <div>

                <h3 className={`${serif.className} text-4xl font-light`}>
                  {project.name}
                </h3>


                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-white/40 mt-2`}>
                  {project.description}
                </p>

              </div>




              <span className={`${mono.className} text-[11px] uppercase tracking-[0.15em] text-white/30`}>
                {project.category}
              </span>




              <span className="text-xl text-white/30 group-hover:translate-x-1 transition">
                ↗
              </span>


            </a>

          ))}

        </div>


      </section>

            {/* PHILOSOPHY */}

      <section
        id="about"
        className="
          px-6
          md:px-12
          py-32
          border-t
          border-white/10
          grid
          md:grid-cols-2
          gap-16
          md:gap-20
          items-center
        "
      >


        {/* IMAGE */}

        <div className="relative aspect-[3/4] overflow-hidden">

          <img
src="/bikram.jpg"
alt="Bikram Mondal"
className="
w-full
h-full
object-cover
object-[center_20%]
brightness-90
contrast-105
"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />


          <span
            className={`
              ${mono.className}
              absolute
              bottom-6
              left-6
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/50
            `}
          >
            Berhampore, India
          </span>


        </div>




        {/* TEXT */}

        <div>


          <p
            className={`
              ${mono.className}
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-white/40
              mb-10
            `}
          >
            Philosophy
          </p>




          <blockquote
            className={`
              ${serif.className}
              text-[clamp(32px,4vw,48px)]
              leading-tight
              font-light
              italic
            `}
          >
            "The future belongs to those who combine creativity, systems, and technology."
          </blockquote>




          <p className="mt-10 max-w-md text-sm leading-8 text-white/50">

            I work at the intersection of technology and storytelling —
            building digital ecosystems designed for utility,
            emotional connection, and long-term impact.

          </p>




          <div className="mt-14 flex gap-14">


            <div>

              <h3
                className={`
                  ${serif.className}
                  text-5xl
                  font-light
                `}
              >
                4
              </h3>


              <p
                className={`
                  ${mono.className}
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                `}
              >
                Projects
              </p>

            </div>




            <div>

              <h3
                className={`
                  ${serif.className}
                  text-5xl
                  font-light
                `}
              >
                ∞
              </h3>


              <p
                className={`
                  ${mono.className}
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                `}
              >
                Ideas
              </p>


            </div>


          </div>


        </div>


      </section>






      {/* CONTACT */}
<section
  id="contact"
  className="
    relative
    overflow-hidden
    px-6
    md:px-12
    py-32
    border-t
    border-white/10
  "
>
  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)]
    "
  />

  <div className="relative z-10 max-w-3xl mx-auto text-center">
    <p
      className={`
        ${mono.className}
        text-[11px]
        uppercase
        tracking-[0.3em]
        text-white/40
        mb-10
      `}
    >
      Let's Build Together
    </p>

    <h2
      className={`
        ${serif.className}
        text-[clamp(50px,8vw,100px)]
        font-light
        leading-none
        mb-20
      `}
    >
      Start a
      <br />
      <em>conversation.</em>
    </h2>

    <form
  onSubmit={handleSubmit}
  className="space-y-8 max-w-xl mx-auto"
>
  <div className="grid md:grid-cols-2 gap-8">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className={inputClass}
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      className={inputClass}
    />
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    <input
      type="tel"
      name="phone_number"
      placeholder="Phone Number"
      className={inputClass}
    />

    <input
      type="text"
      name="company"
      placeholder="Company (Optional)"
      className={inputClass}
    />
  </div>

  <select
    name="what_are_you_looking_for"
    required
    defaultValue=""
    className={inputClass}
  >
    <option value="" disabled>
      What are you looking for?
    </option>

    <option value="AI & Automation">
      AI & Automation
    </option>

    <option value="Website Development">
      Website Development
    </option>

    <option value="Custom Software">
      Custom Software
    </option>

    <option value="Brand & Storytelling">
      Brand & Storytelling
    </option>

    <option value="Collaboration">
      Collaboration
    </option>
  </select>

  <select
    name="project_budget"
    defaultValue=""
    className={inputClass}
  >
    <option value="" disabled>
      Project Budget
    </option>

    <option value="₹25K - ₹50K">
      ₹25K - ₹50K
    </option>

    <option value="₹50K - ₹1L">
      ₹50K - ₹1L
    </option>

    <option value="₹1L - ₹5L">
      ₹1L - ₹5L
    </option>

    <option value="₹5L+">
      ₹5L+
    </option>

    <option value="Not Sure">
      Not Sure
    </option>
  </select>

  <select
    name="timeline"
    defaultValue=""
    className={inputClass}
  >
    <option value="" disabled>
      Timeline
    </option>

    <option value="ASAP">
      ASAP
    </option>

    <option value="Within 1 Month">
      Within 1 Month
    </option>

    <option value="1–3 Months">
      1–3 Months
    </option>

    <option value="3+ Months">
      3+ Months
    </option>

    <option value="Just Exploring">
      Just Exploring
    </option>
  </select>

  <textarea
    name="message"
    rows={5}
    required
    placeholder="Tell me about your project..."
    className={inputClass}
  />

  <button
    type="submit"
    disabled={loading}
    className="
      border
      border-[#e8e4dc]
      px-12
      py-5
      text-[11px]
      uppercase
      tracking-[0.3em]
      transition
      hover:bg-[#e8e4dc]
      hover:text-black
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
  >
   {loading
    ? "Sending..."
    : success
    ? "✓ Message Sent"
    : "Start Conversation"}
  </button>
</form>
  </div>
</section>

            {/* FOOTER */}

      <footer
        className="
          px-6
          md:px-12
          py-10
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        "
      >


        <p
          className={`
            ${mono.className}
            text-[11px]
            uppercase
            tracking-[0.15em]
            text-white/30
          `}
        >
          © 2026 Bikram Mondal
        </p>




        <div className="flex gap-8">


          {[
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/bikrammondal/",
            },
            {
              name: "Instagram",
              link: "https://www.instagram.com/bikrammondal.in/",
            },
            {
              name: "YouTube",
              link: "https://www.youtube.com/@bikrammondaldotin",
            },
          ].map((social) => (

            <a
              key={social.name}
              href={social.link}
              className={`
                ${mono.className}
                text-[11px]
                uppercase
                tracking-[0.2em]
                text-white/30
                hover:text-white
                transition
              `}
            >
              {social.name}
            </a>

          ))}


        </div>


      </footer>



    </main>
  );
}