const petalRing = document.getElementById('petalRing');
const sparkles = document.getElementById('sparkles');

const petalCount = 14;
for (let i = 0; i < petalCount; i++) {
  const petal = document.createElement('div');
  petal.className = 'petal';
  const angle = (360 / petalCount) * i;
  const translateDistance = 90;

  petal.style.transform = `rotate(${angle}deg) translateY(-${translateDistance}px)`;
  petal.style.animationDelay = `${i * 0.15}s`;
  petal.style.opacity = String(0.9 + (i % 3) * 0.05);

  petalRing.appendChild(petal);
}

for (let i = 0; i < 18; i++) {
  const sparkle = document.createElement('span');
  sparkle.className = 'sparkle';

  const radius = 90 + Math.random() * 70;
  const angle = Math.random() * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const delay = Math.random() * 1.8;

  sparkle.style.left = `${50 + x / 2}px`;
  sparkle.style.top = `${50 + y / 2}px`;
  sparkle.style.animationDelay = `${delay}s`;
  sparkle.style.opacity = String(0.35 + Math.random() * 0.65);

  sparkles.appendChild(sparkle);
}
