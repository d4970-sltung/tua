<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { label: '關於歐院長', href: '#about' },
  { label: '政見主軸', href: '#vision' },
  { label: '經歷', href: '#timeline' },
  { label: '聯絡資訊', href: '#footer' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

function scrollTo(href) {
  mobileOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="nav-container">
      <a class="nav-brand" href="#" @click.prevent="scrollTo('#hero')">
        <span class="brand-text">歐宴泉醫師</span>
      </a>
      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" aria-label="選單">
        <span :class="['bar', { open: mobileOpen }]"></span>
        <span :class="['bar', { open: mobileOpen }]"></span>
        <span :class="['bar', { open: mobileOpen }]"></span>
      </button>
      <ul :class="['nav-links', { open: mobileOpen }]">
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href" @click.prevent="scrollTo(item.href)">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.nav-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand-text {
  font-family: 'Noto Serif TC', serif;
  font-weight: 700;
  font-size: 20px;
  color: var(--text-dark);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 8px;
}

.nav-links a {
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  color: var(--text-dark);
  transition: all 0.3s;
  text-decoration: none;
}

.navbar:not(.scrolled) .nav-links a {
  color: var(--text-dark);
}

.nav-links a:hover {
  background: var(--primary);
  color: white;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.bar {
  width: 24px;
  height: 2px;
  background: var(--text-dark);
  border-radius: 2px;
  transition: all 0.3s;
}

.navbar:not(.scrolled) .bar {
  background: var(--text-dark);
}

.bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 260px;
    height: 100vh;
    background: white;
    flex-direction: column;
    padding: 80px 24px 24px;
    gap: 4px;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links a {
    color: var(--text-dark) !important;
    font-size: 1.05rem;
    padding: 12px 18px;
  }
}
</style>
