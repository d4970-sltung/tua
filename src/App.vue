<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import VisionSection from './components/VisionSection.vue'
import QuoteSection from './components/QuoteSection.vue'
import VideoSection from './components/VideoSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import ClosingSection from './components/ClosingSection.vue'
import FooterSection from './components/FooterSection.vue'

let observer = null

onMounted(() => {
  nextTick(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((el) => {
      observer.observe(el)
    })
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <NavBar />
  <HeroSection />
  <AboutSection />
  <VisionSection />
  <QuoteSection />
  <VideoSection />
  <TimelineSection />
  <ClosingSection />
  <FooterSection />
</template>
