// Animate hero title and gradient text
anime({
  targets: '.hero-title',
  translateY: [-60, 0],
  opacity: [0, 1],
  duration: 1200,
  easing: 'easeOutExpo'
});
anime({
  targets: '.gradient-text',
  scale: [0.8, 1],
  opacity: [0, 1],
  delay: 400,
  duration: 1200,
  easing: 'easeOutElastic(1, .7)'
});
anime({
  targets: '.prompt-box',
  translateY: [40, 0],
  opacity: [0, 1],
  delay: 600,
  duration: 900,
  easing: 'easeOutExpo'
});
anime({
  targets: '.quick-btn',
  opacity: [0, 1],
  translateY: [20, 0],
  delay: anime.stagger(120, {start: 900}),
  duration: 700,
  easing: 'easeOutExpo'
});
anime({
  targets: '.community',
  opacity: [0, 1],
  translateY: [40, 0],
  delay: 1200,
  duration: 900,
  easing: 'easeOutExpo'
});
anime({
  targets: '.gallery-item',
  opacity: [0, 1],
  scale: [0.95, 1],
  delay: anime.stagger(180, {start: 1500}),
  duration: 700,
  easing: 'easeOutBack(1.2)'
}); 