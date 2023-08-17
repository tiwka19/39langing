// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '1200',
  delay: '300',
});

sr.reveal('.hero__data');

sr.reveal('.pricing', {
  duration: '400',
  delay: 0,
  origin: 'bottom',
});
sr.reveal('.helps', {
  duration: '400',
  delay: 0,
  origin: 'bottom',
});
sr.reveal('.reviews', {
  duration: '400',
  delay: 0,
  origin: 'bottom',
});
sr.reveal('.education', {
  duration: '400',
  delay: 0,
  origin: 'bottom',
});
sr.reveal('.contacts', {
  duration: '400',
  delay: 0,
  origin: 'bottom',
});
sr.reveal('.helps__item', {
  duration: '600',
  interval: '100',
});