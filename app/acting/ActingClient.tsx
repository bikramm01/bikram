"use client";

import { useState } from "react";
import { Cormorant_Garamond, Geist_Mono } from "next/font/google";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const training = [
  {
    type: "Theatre Workshop",
    title: "Acting & Performance Improvement",
    instructor: "Nabin Theatre Group",
    year: "2023",
  },
  {
    type: "Workshop",
    title: "SMPAi Acting Workshop",
    instructor: "SMPAi Kolkata",
    year: "2023–2024",
  },
  {
    type: "Practice",
    title: "Acting Practice & Rehearsals",
    instructor: "Co-working",
    year: "2026",
  },
];

const gallery = [
  "/acting/gallery/nabin/gallery-11.jpg",
  "/acting/gallery/nabin/gallery-07.png",
  "/acting/gallery/nabin/gallery-02.jpg",
  "/acting/gallery/smpai/gallery-04.jpg",
  "/acting/gallery/smpai/gallery-05.jpg",
  "/acting/gallery/nabin/gallery-12.jpg",
];

export default function ActingClient() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const showPrevious = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === 0 ? gallery.length - 1 : selectedImage - 1
    );
  };

  const showNext = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === gallery.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <main className="min-h-screen bg-[#090909] text-[#e8e4dc] overflow-hidden">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a
            href="/"
            className={`${serif.className} text-xl text-white hover:opacity-60 transition-opacity`}
          >
            BIKRAM
          </a>

          {/* NAV */}
          <nav
            className={`${mono.className} hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.25em] text-white/50`}
          >
            <a
              href="#reel"
              className="hover:text-white transition-colors"
            >
              Reel
            </a>

            <a
              href="#craft"
              className="hover:text-white transition-colors"
            >
              Craft
            </a>

            <a
              href="#gallery"
              className="hover:text-white transition-colors"
            >
              Gallery
            </a>

            <a
              href="#about"
              className="hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* MAIN SITE */}
          <a
            href="/"
            className={`${mono.className} text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors`}
          >
            Main Site
          </a>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen flex items-end">
        <img
          src="/acting/acting-hero.jpg"
          alt="Bikram Mondal"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/35 to-black/20" />

        <div className="relative z-10 w-full px-6 md:px-12 pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <p
              className={`${mono.className} hidden md:block text-[10px] uppercase tracking-[0.4em] text-white/50 mb-8`}
            >
              Actor · Performer · Storyteller
            </p>

          
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#reel"
                className={`${mono.className} inline-flex items-center gap-4 border border-[#e8e4dc] px-7 py-4 text-[10px] uppercase tracking-[0.25em] text-[#e8e4dc] hover:bg-[#e8e4dc] hover:text-black transition`}
              >
                Watch Showreel
                <span>↗</span>
              </a>

              <a
                href="#craft"
                className={`${mono.className} text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition`}
              >
                Explore Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY ACTING
      ===================================================== */}

      <section className="px-6 md:px-12 py-28 md:py-40 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* TEXT */}
          <div>
            <p
              className={`${mono.className} text-[10px] uppercase tracking-[0.35em] text-white/35 mb-10`}
            >
              Why Acting?
            </p>

            <h2
              className={`${serif.className} text-[clamp(40px,6vw,78px)] font-light leading-[1.05]`}
            >
              Every character
              <br />
              <em>has a world.</em>
            </h2>

            <p className="mt-10 max-w-xl text-sm md:text-base leading-8 text-white/45">
              I am interested in characters that feel human - complicated,
              vulnerable, unpredictable, funny, flawed, and real.
            </p>

            <p className="mt-6 max-w-xl text-sm md:text-base leading-8 text-white/45">
              Acting gives me the opportunity to observe people, explore
              emotions, and step into stories that are different from my own.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative aspect-[3/4] md:max-w-md md:ml-auto overflow-hidden bg-white/5">
            <img
              src="/acting/acting-intro.jpg"
              alt="Bikram Mondal"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* =====================================================
          SHOWREEL
      ===================================================== */}

     <section
  id="reel"
  className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10"
>
  <div className="max-w-7xl mx-auto">
    <div className="flex items-end justify-between mb-12">
      <div>
        <p
          className={`${mono.className} text-[10px] uppercase tracking-[0.35em] text-white/35 mb-5`}
        >
          01
        </p>

        <h2
          className={`${serif.className} text-5xl md:text-7xl font-light`}
        >
          Showreel
        </h2>
      </div>

      <span
        className={`${mono.className} hidden md:block text-[10px] uppercase tracking-[0.2em] text-white/30`}
      >
        Selected Scenes
      </span>
    </div>

    {/* YOUTUBE SHOWREEL */}
    <div className="relative aspect-video bg-[#111] border border-white/10 overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/yxA3A8paCms?si=a23Uq2Ux3np_Yq3d"
        title="Bikram Mondal Showreel"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  </div>
</section>

      {/* =====================================================
          TRAINING & WORKSHOPS
      ===================================================== */}

      <section
        id="craft"
        className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
            {/* INTRO */}
            <div>
              <p
                className={`${mono.className} text-[10px] uppercase tracking-[0.35em] text-white/35 mb-5`}
              >
                02
              </p>

              <h2
                className={`${serif.className} text-5xl md:text-7xl font-light leading-none`}
              >
                The
                <br />
                <em>Craft</em>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/40">
                Acting is a continuous process of learning, observing,
                experimenting, and understanding the character.
              </p>
            </div>

            {/* TRAINING */}
            <div>
              {training.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="grid grid-cols-[1fr_auto] md:grid-cols-[140px_1fr_auto] gap-5 md:gap-8 items-center py-8 border-b border-white/10"
                >
                  {/* TYPE */}
                  <span
                    className={`${mono.className} text-[9px] uppercase tracking-[0.15em] text-white/25`}
                  >
                    {item.type}
                  </span>

                  {/* TITLE */}
                  <div>
                    <h3
                      className={`${serif.className} text-3xl md:text-4xl font-light`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-white/35">
                      {item.instructor}
                    </p>
                  </div>

                  {/* YEAR */}
                  <span
                    className={`${mono.className} text-[10px] text-white/25 text-right`}
                  >
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        id="gallery"
        className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p
              className={`${mono.className} text-[10px] uppercase tracking-[0.35em] text-white/35 mb-5`}
            >
              03
            </p>

            <h2
              className={`${serif.className} text-5xl md:text-7xl font-light`}
            >
              Gallery
            </h2>
          </div>

          {/* MASONRY GALLERY */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
            {gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(index)}
                className="mb-4 md:mb-6 break-inside-avoid block w-full overflow-hidden bg-[#111] cursor-zoom-in text-left"
              >
                <img
                  src={image}
                  alt={`Bikram Mondal - acting photo ${index + 1}`}
                  className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="px-6 md:px-12 py-24 md:py-40 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* IMAGE */}
          <div className="aspect-[3/4] overflow-hidden bg-[#111]">
            <img
              src="/acting/acting-about.jpg"
              alt="Bikram Mondal"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* TEXT */}
          <div>
            <p
              className={`${mono.className} text-[10px] uppercase tracking-[0.35em] text-white/35 mb-10`}
            >
              04 · About
            </p>

            <h2
              className={`${serif.className} text-[clamp(42px,5vw,72px)] font-light leading-none`}
            >
              Actor.
              <br />
              <em>Storyteller.</em>
            </h2>

            <div className="mt-10 space-y-6 text-sm leading-8 text-white/45 max-w-lg">
              <p>
                I am drawn to stories, characters, and the small details
                that make people feel real.
              </p>

              <p>
                My journey as an actor is one of continuous learning -
                developing through workshops, observation, practice, and
                experience.
              </p>

              <p>
                I am especially interested in grounded storytelling,
                character-driven drama, and comedy with emotional depth.
              </p>
            </div>

            {/* DETAILS */}
            <div className="mt-14 grid grid-cols-2 gap-y-8 max-w-md">
              <div>
                <p
                  className={`${mono.className} text-[9px] uppercase tracking-[0.2em] text-white/30`}
                >
                  Based In
                </p>

                <p className={`${serif.className} text-2xl mt-2`}>
                  India
                </p>
              </div>

              <div>
                <p
                  className={`${mono.className} text-[9px] uppercase tracking-[0.2em] text-white/30`}
                >
                  Languages
                </p>

                <p className={`${serif.className} text-2xl mt-2`}>
                  Bengali · Hindi · English
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="px-6 md:px-12 py-28 md:py-40 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className={`${mono.className} text-[10px] uppercase tracking-[0.35em] text-white/35 mb-10`}
          >
            05 · Casting & Collaboration
          </p>

          <h2
            className={`${serif.className} text-[clamp(52px,8vw,100px)] font-light leading-[0.9]`}
          >
            Let's tell
            <br />
            <em>a story.</em>
          </h2>

          <p className="mt-10 max-w-md mx-auto text-sm leading-7 text-white/40">
            For casting enquiries, collaborations, performances, or
            conversations about upcoming projects.
          </p>

          <a
            href="/#contact"
            className={`${mono.className} inline-flex mt-10 border border-[#e8e4dc] px-8 py-5 text-[10px] uppercase tracking-[0.25em] hover:bg-[#e8e4dc] hover:text-black transition`}
          >
            Casting Enquiries
          </a>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="px-6 md:px-12 py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
        <p
          className={`${mono.className} text-[9px] uppercase tracking-[0.2em] text-white/25`}
        >
          © 2026 Bikram Mondal
        </p>

        <div className="flex gap-7">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className={`${mono.className} text-[9px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition`}
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className={`${mono.className} text-[9px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition`}
          >
            YouTube
          </a>

          <a
            href="/"
            className={`${mono.className} text-[9px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition`}
          >
            Main Site
          </a>
        </div>
      </footer>

      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE */}
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 md:top-8 md:right-10 z-20 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <X size={24} strokeWidth={1} />
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-2 md:left-8 z-20 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          {/* IMAGE */}
          <div
            className="relative max-w-[88vw] max-h-[88vh] flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={gallery[selectedImage]}
              alt={`Bikram Mondal - acting photo ${
                selectedImage + 1
              }`}
              className="max-w-[88vw] max-h-[88vh] w-auto h-auto object-contain"
            />
          </div>

          {/* NEXT */}
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-2 md:right-8 z-20 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>

          {/* COUNTER */}
          <div
            className={`${mono.className} absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.25em] text-white/35`}
          >
            {String(selectedImage + 1).padStart(2, "0")} /{" "}
            {String(gallery.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </main>
  );
}