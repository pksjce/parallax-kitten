const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#container",
    pin: true,
    start: "top top",
    scrub: 1,
    markers: true,
  },
});

tl.fromTo(
  "#heading",
  { transform: "translate(0,-20%)" },
  { transform: "translate(0,40%)", opacity: 1, duration: 3 }
);
tl.to("#leaves", { opacity: 1, duration: 2 });
tl.from("circle", { r: 0, duration: 3 });
tl.to("#part1", { opacity: 1, duration: 1 });

tl.fromTo(
  ".walk-then-sit",
  { "background-position": "0 0" },
  {
    "background-position": "0 -2391px",
    duration: 1.5,
    ease: SteppedEase.config(12),
  }
).fromTo(
  ".walk-then-sit",
  { "background-position": "-400px 0" },
  {
    "background-position": "-400px -1200px",
    duration: 1.5,
    ease: SteppedEase.config(6),
  }
);
tl.fromTo(
  ".move",
  { "margin-left": "100%" },
  { "margin-left": "-50%", duration: 3 }
);
