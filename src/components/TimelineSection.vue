<script setup>
const milestones = [
  {
    year: '1979',
    title: '踏入醫學之路',
    desc: '進入醫學院就讀，展開泌尿科醫學的學習旅程，與台灣泌尿科醫學會發展同步前行。',
    color: '#009A5B',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>`,
  },
  {
    year: '1986',
    title: '住院醫師訓練',
    desc: '於台中榮總接受泌尿科住院醫師訓練，在楊啟瑞主任如師如父的指導下奠定臨床基礎。',
    color: '#6366f1',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/></svg>`,
  },
  {
    year: '1997',
    title: '赴美進修泌尿腫瘤',
    desc: '赴美國維吉尼亞大學追隨 Prof. Leland W. K. Chung 進修泌尿腫瘤學，奠定深厚學術基礎。',
    color: '#f59e0b',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  },
  {
    year: '1999',
    title: '攝護腺篩檢啟動',
    desc: '在苗栗公館鄉舉辦首場攝護腺健康活動，持續至今每年不間斷推動篩檢與衛教。',
    color: '#ef4444',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  },
  {
    year: '2005',
    title: '國際手術交流',
    desc: '師承 Dr. Vipul Patel、Dr. Ash Tewari、Dr. Peter Wiklund，投入機械手臂手術教學與推廣。',
    color: '#14b8a6',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    year: '2016',
    title: '萬人篩檢行動',
    desc: '發起萬人攝護腺篩檢行動，2024-2025年串聯全國泌尿科力量推動第六癌篩檢。',
    color: '#ec4899',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  },
  {
    year: '歷年',
    title: '學會深耕服務',
    desc: '歷任一屆監事、九屆理事、四個委員會主委、兩屆副理事長。主辦四次大型國際會議。',
    color: '#8b5cf6',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
  {
    year: '2026',
    title: '競選理事長',
    desc: '正式投入台灣泌尿科醫學會第25屆理事長選舉，以經驗承擔責任，用共識開創未來。',
    color: '#009A5B',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
  },
]
</script>

<template>
  <section id="timeline" class="timeline-section section">
    <div class="container">
      <div class="timeline-header fade-in">
        <span class="section-label">歷程</span>
        <h2 class="section-title">專業之路 步步踏實</h2>
        <div class="section-line"></div>
      </div>

      <div class="timeline">
        <div class="timeline-track"></div>

        <div
          v-for="(m, i) in milestones"
          :key="i"
          :class="['tl-item', i % 2 === 0 ? 'tl-right' : 'tl-left', 'fade-in']"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <!-- 中心圓形 icon -->
          <div class="tl-node" :style="{ borderColor: m.color }">
            <div class="tl-icon" :style="{ color: m.color }" v-html="m.icon"></div>
          </div>

          <!-- 年份標籤 -->
          <div
            :class="['tl-year', i % 2 === 0 ? 'tl-year-left' : 'tl-year-right']"
            :style="{ color: m.color }"
          >
            {{ m.year }}
          </div>

          <!-- 內容卡片 -->
          <div class="tl-card">
            <div class="tl-card-dot" :style="{ background: m.color }"></div>
            <h4 class="tl-card-title">{{ m.title }}</h4>
            <p class="tl-card-desc">{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  background: var(--section-bg);
  padding: 80px 0 100px;
}

.timeline-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-label {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 16px;
}

.section-title {
  font-size: 2.4rem;
  line-height: 1.4;
  margin-bottom: 20px;
}

.section-line {
  width: 60px;
  height: 3px;
  background: var(--primary);
  margin: 0 auto;
  border-radius: 2px;
}

/* ---- Timeline ---- */
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline-track {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--primary), #6366f1, #f59e0b, #ef4444, #14b8a6, #ec4899, #8b5cf6, var(--primary));
  transform: translateX(-50%);
  border-radius: 3px;
}

/* ---- Item ---- */
.tl-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  min-height: 100px;
}

/* Node: centered circle */
.tl-node {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  border: 3px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.tl-item:hover .tl-node {
  transform: translateX(-50%) scale(1.12);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.14);
}

.tl-icon {
  width: 26px;
  height: 26px;
}

.tl-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

/* Year label */
.tl-year {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Noto Serif TC', serif;
  font-size: 1.6rem;
  font-weight: 900;
  white-space: nowrap;
}

.tl-year-left {
  right: calc(50% + 48px);
  text-align: right;
}

.tl-year-right {
  left: calc(50% + 48px);
  text-align: left;
}

/* Card */
.tl-card {
  position: relative;
  width: calc(50% - 68px);
  background: white;
  border-radius: 16px;
  padding: 24px 28px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.tl-item:hover .tl-card {
  box-shadow: 0 8px 30px rgba(0, 154, 91, 0.1);
  transform: translateY(-2px);
}

.tl-card-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-bottom: 10px;
}

/* Right side: card on right */
.tl-right .tl-card {
  margin-left: auto;
}

/* Left side: card on left */
.tl-left .tl-card {
  margin-right: auto;
}

.tl-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.tl-card-desc {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-light);
}

/* ---- Mobile ---- */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .timeline-track {
    left: 28px;
  }

  .tl-item {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-left: 72px;
  }

  .tl-node {
    left: 28px;
    top: 0;
    transform: translateX(-50%);
    width: 48px;
    height: 48px;
  }

  .tl-item:hover .tl-node {
    transform: translateX(-50%) scale(1.1);
  }

  .tl-year {
    position: relative;
    top: auto;
    left: auto !important;
    right: auto !important;
    transform: none;
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  .tl-card {
    width: 100%;
    margin: 0 !important;
  }
}
</style>
