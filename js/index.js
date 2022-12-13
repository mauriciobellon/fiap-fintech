anime({
  targets: ".logo",
  rotate: 180,
  duration: 2000,
  complete: function (anim) {
    anime({
      targets: ".logo",
      scale: 5,
      opacity: 0,
      duration: 500,
      easing: "linear",
      complete: function (anim) {
        const logo = document.querySelector(".logo");
        logo.remove();
      },
    });
  },
});

anime({
  targets: ".marca",
  opacity: 1,
  easing: "easeInOutSine",
  delay: 500,
  duration: 1500,
  complete: function (anim) {
    anime({
      targets: ".marca",
      scale: 5,
      opacity: 0,
      duration: 500,
      easing: "linear",
      complete: function (anim) {
        const marca = document.querySelector(".marca");
        marca.remove();
      },
    });
  },
});

anime({
  targets: ".animacao",
  opacity: 0,
  delay: 2000,
  duration: 800,
  complete: function (anim) {
    const animacao = document.querySelector(".animacao");
    animacao.remove();
    const overflow = document.body;
    overflow.style.removeProperty("overflow");
  },
});

anime({
  targets: ".login",
  keyframes: [
    { filter: "blur(10)", opacity: 0 },
    { filter: "blur(9)", opacity: 0.1 },
    { filter: "blur(8)", opacity: 0.2 },
    { filter: "blur(7)", opacity: 0.3 },
    { filter: "blur(6)", opacity: 0.4 },
    { filter: "blur(5)", opacity: 0.5 },
    { filter: "blur(4)", opacity: 0.6 },
    { filter: "blur(3)", opacity: 0.7 },
    { filter: "blur(2)", opacity: 0.8 },
    { filter: "blur(1)", opacity: 0.9 },
    { filter: "blur(0)", opacity: 1 },
  ],
  delay: 2000,
  duration: 900,
  changeBegin: function (anim) {
    const login = document.querySelector(".login");
    login.style.zIndex = "1";
  },
});
