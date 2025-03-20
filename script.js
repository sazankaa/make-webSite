const heading = document.querySelector("#heading");

const keyframes = {
  translate: ["0 -400px ", 0],
};
const options = {
  duration: 1500,
  easing: "ease-in-out",
};

heading.animate(keyframes, options);

// 監視対象が範囲内に現れたら実行する動作
const showlink = (entries, obs) => {
  if (entries[0].isIntersecting) {
    entries[0].target.animate(
      {
        opacity: [0, 1],
        translate: ["500px 0", 0],
      },
      {
        duration: 500,
        easing: "ease",
        fill: "forwards",
      }
    );
    obs.unobserve(entries[0].target);
  }
};

const optional = {
  rootMargin: "20px",
  threshold: 0.5,
};
const linkObserver = new IntersectionObserver(showlink, optional);

linkObserver.observe(document.querySelector("#Link"));
