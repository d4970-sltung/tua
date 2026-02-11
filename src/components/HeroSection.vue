<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const loaded = ref(false)
const canvasRef = ref(null)
let animId = null
let particles = []
let mouse = { x: -9999, y: -9999, prevX: -9999, prevY: -9999 }
let canvasW = 0
let canvasH = 0

// Confetti colors — green tones + warm accents
const COLORS = [
  '#009A5B', '#00C472', '#00b368', '#007A48',
  '#2dd4a0', '#34d399', '#6ee7b7',
  '#f59e0b', '#ef4444', '#6366f1', '#8b5cf6',
  '#ec4899', '#f97316', '#14b8a6',
]

const SHAPES = ['rect', 'circle', 'line']

class Confetti {
  constructor(x, y) {
    this.x = x
    this.y = y
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 1.2 + 0.5
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed - 0.5
    this.gravity = 0.015 + Math.random() * 0.01
    this.drag = 0.99 + Math.random() * 0.008
    this.size = Math.random() * 5 + 3
    this.rotation = Math.random() * 360
    this.rotSpeed = (Math.random() - 0.5) * 3
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)]
    this.alpha = 1
    this.life = 1
    this.decay = 0.0015 + Math.random() * 0.002
  }

  update() {
    this.vy += this.gravity
    this.vx *= this.drag
    this.vy *= this.drag
    this.x += this.vx
    this.y += this.vy
    this.rotation += this.rotSpeed
    this.life -= this.decay
    this.alpha = Math.max(0, this.life)
  }

  draw(ctx) {
    if (this.alpha <= 0) return
    ctx.save()
    ctx.globalAlpha = this.alpha
    ctx.translate(this.x, this.y)
    ctx.rotate((this.rotation * Math.PI) / 180)
    ctx.fillStyle = this.color
    ctx.strokeStyle = this.color
    ctx.lineWidth = 2

    if (this.shape === 'rect') {
      ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2)
    } else if (this.shape === 'circle') {
      ctx.beginPath()
      ctx.arc(0, 0, this.size / 2.5, 0, Math.PI * 2)
      ctx.fill()
    } else {
      ctx.beginPath()
      ctx.moveTo(-this.size / 2, 0)
      ctx.lineTo(this.size / 2, 0)
      ctx.stroke()
    }

    ctx.restore()
  }
}

let spawnTimer = 0

function animate(ctx) {
  ctx.clearRect(0, 0, canvasW, canvasH)

  // Spawn new confetti near mouse as it moves
  if (mouse.x > 0 && mouse.y > 0) {
    const dx = mouse.x - mouse.prevX
    const dy = mouse.y - mouse.prevY
    const speed = Math.sqrt(dx * dx + dy * dy)
    // Spawn rate based on mouse speed — gentle
    const count = Math.min(Math.floor(speed * 0.15), 3)
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const ox = (Math.random() - 0.5) * 24
        const oy = (Math.random() - 0.5) * 24
        particles.push(new Confetti(mouse.x + ox, mouse.y + oy))
      }
    }
    // Also spawn a trickle even when still
    spawnTimer++
    if (spawnTimer % 8 === 0) {
      const ox = (Math.random() - 0.5) * 30
      const oy = (Math.random() - 0.5) * 30
      particles.push(new Confetti(mouse.x + ox, mouse.y + oy))
    }
  }

  mouse.prevX = mouse.x
  mouse.prevY = mouse.y

  // Update & draw
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update()
    particles[i].draw(ctx)
    if (particles[i].alpha <= 0) {
      particles.splice(i, 1)
    }
  }

  // Cap max particles
  if (particles.length > 500) {
    particles.splice(0, particles.length - 500)
  }

  animId = requestAnimationFrame(() => animate(ctx))
}

function handleResize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.parentElement.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1
  canvasW = rect.width
  canvasH = rect.height
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  canvas.style.width = rect.width + 'px'
  canvas.style.height = rect.height + 'px'
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
}

function handleMouseMove(e) {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.parentElement.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
}

function handleMouseLeave() {
  mouse.x = -9999
  mouse.y = -9999
}

onMounted(() => {
  setTimeout(() => { loaded.value = true }, 100)

  const canvas = canvasRef.value
  if (!canvas) return
  handleResize()
  const ctx = canvas.getContext('2d')
  animate(ctx)

  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', handleMouseLeave)
})

function scrollToVision() {
  const el = document.querySelector('#vision')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <canvas ref="canvasRef" class="particle-canvas"></canvas>
    </div>
    <div class="hero-inner">
      <div :class="['hero-image', { loaded }]">
        <img src="/images/doctor-portrait.png" alt="歐宴泉醫師" />
      </div>

      <div :class="['hero-content', { loaded }]">
        <div class="hero-badge">台灣泌尿科醫學會 第25屆理事長候選人</div>
        <h1 class="hero-name">歐 宴 泉</h1>
        <p class="hero-title">童綜合醫院 研發創新中心院長</p>
        <p class="hero-slogan">以經驗承擔責任，用共識開創未來</p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">40+</span>
            <span class="stat-label">年行醫經歷</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">9</span>
            <span class="stat-label">屆理事經驗</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">2</span>
            <span class="stat-label">屆副理事長</span>
          </div>
        </div>
        <a href="#vision" class="hero-cta" @click.prevent="scrollToVision">
          認識歐宴泉醫師
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
        </a>
      </div>
    </div>

    <div class="scroll-hint">
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100dvh;
  min-height: 700px;
  overflow: hidden;
  background: #ddf1e5;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: #ddf1e5;
}

.particle-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hero-inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

/* ---- 人物圖片 ---- */
.hero-image {
  flex: 0 0 45%;
  align-self: flex-end;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s ease 0.2s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
}

.hero-image.loaded {
  opacity: 1;
  transform: translateY(0);
  margin: 0 auto;
}

.hero-image img {
  display: block;
  width: 100%;
  max-width: 480px;
  height: auto;
  max-height: 88dvh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(4px 8px 24px rgba(0, 0, 0, 0.1));
}

/* ---- 文字內容 ---- */
.hero-content {
  flex: 1;
  align-self: center;
  padding: 80px 0 80px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
}

.hero-content.loaded {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge {
  display: inline-block;
  background: rgba(0, 154, 91, 0.1);
  color: var(--primary-dark);
  padding: 8px 20px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 154, 91, 0.18);
}

.hero-name {
  font-family: 'Noto Serif TC', serif;
  font-size: 5rem;
  font-weight: 900;
  color: var(--text-dark);
  line-height: 1.1;
  margin-bottom: 10px;
  letter-spacing: 10px;
}

.hero-title {
  font-size: 1.15rem;
  color: var(--text-body);
  margin-bottom: 24px;
  font-weight: 400;
}

.hero-slogan {
  font-family: 'Noto Serif TC', serif;
  font-size: 1.65rem;
  color: var(--primary-dark);
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 32px;
  letter-spacing: 2px;
  white-space: nowrap;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 36px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-family: 'Noto Serif TC', serif;
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--primary-dark);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-light);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(0, 154, 91, 0.25);
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--primary);
  color: white;
  padding: 14px 32px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(0, 154, 91, 0.3);
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0, 154, 91, 0.35);
  background: var(--primary-dark);
  color: white;
}

/* ---- 捲動提示 ---- */
.scroll-hint {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line {
  width: 2px;
  height: 36px;
  background: rgba(0, 154, 91, 0.15);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.scroll-line::after {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 50%;
  background: var(--primary);
  animation: scrollDown 1.8s infinite;
}

@keyframes scrollDown {
  0% { top: -50%; }
  100% { top: 100%; }
}

/* ---- RWD ---- */
@media (max-width: 1024px) {
  .hero-image {
    flex: 0 0 40%;
  }

  .hero-name {
    font-size: 3.8rem;
  }

  .hero-slogan {
    white-space: normal;
  }
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 100dvh;
  }

  .hero-inner {
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
  }

  .hero-image {
    flex: none;
    order: -1;
  }

  .hero-image img {
    max-width: 280px;
    max-height: 50dvh;
  }

  .hero-content {
    text-align: center;
    padding: 24px 0 60px;
  }

  .hero-name {
    font-size: 3rem;
    letter-spacing: 6px;
  }

  .hero-slogan {
    font-size: 1.25rem;
    white-space: normal;
  }

  .hero-stats {
    justify-content: center;
  }
}
</style>
