<script setup>
const visions = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    title: '文化價值型塑',
    subtitle: 'Culture',
    desc: '以公共健康、專業精進與國際視野為核心，形塑 TUA 專業、優質、值得社會信賴的品牌形象。',
    items: [
      '推動泌尿疾病衛教與早期篩檢，全力促成攝護腺癌納入國健署「第六癌篩檢」',
      '建立學會一致、清楚的專業對外論述，提升在政府、健保與社會中的信任度',
      '系統化編撰 TUA guideline，全面提升臨床與教學品質',
      '因應 AI 與數位醫療浪潮，規劃可落實的合作與發展藍圖',
      '持續深化國際連結，強化台灣泌尿科的國際影響力',
    ],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    title: '成長策略布局',
    subtitle: 'Strategy',
    desc: '制定清楚、可執行的中長期策略，落實北、中、南、東區域平衡發展。',
    items: [
      '推動醫學中心、區域醫院、地區醫院與基層診所的垂直與水平整合',
      '發展區域特色次專科，避免資源過度集中',
      '爭取合理增加泌尿科專科醫師員額',
      '整合區域學習平台，促進學術與臨床並進',
      '發展多元自費醫療模式，提升整體專業競爭力',
    ],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    title: '組織協同運作',
    subtitle: 'Organization',
    desc: '打造有效率、有共識、能解決問題的學會，成為會員最堅實的後盾。',
    items: [
      '協助會員處理執業、健保、評鑑等第一線實務問題',
      '整合全台次專科會議，避免重複與資源失衡',
      '強化功能性委員會運作，確保資源公平與區域均衡',
      '成立學會智庫，針對健保、政策與制度改革提出專業建言及解決方案',
      '凝聚健保核刪制度的學會共識，理性、有效代表會員發聲',
    ],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
    title: '人才培育與制度優化',
    subtitle: 'People & System',
    desc: '制度公平、人才培育，是學會永續發展的根本。',
    items: [
      '建立次專科代訓制度，由學會統籌年輕醫師跨院學習（達文西腫瘤手術、功能性泌尿學、尿失禁與骨盆脫垂、小兒泌尿科等）',
      '與慈濟大體模擬手術中心合作，定期舉辦高品質模擬手術課程',
      '功能性委員會採多年制，逐步更替，確保制度穩定與專業累積',
      '建立重要疾病研究群，整合全國資源，培養臨床研究與論文能量',
      '檢討住院醫師與專科醫師考試制度及通過率，兼顧臨床實務與公平性',
      '推動學會期刊邁向 SCI，培養更多醫師科學家',
      '積極爭取提升泌尿科手術及各項健保點值，合理反映專業勞益',
    ],
  },
]
</script>

<template>
  <section id="vision" class="vision section">
    <div class="container">
      <div class="vision-header fade-in">
        <span class="section-label">政見主軸</span>
        <h2 class="section-title">四大面向 開創新局</h2>
        <div class="section-line"></div>
      </div>

      <div class="vision-grid">
        <div
          class="vision-card fade-in"
          v-for="(v, i) in visions"
          :key="i"
          :style="{ transitionDelay: `${i * 0.15}s` }"
        >
          <div class="card-top">
            <span class="card-icon" v-html="v.icon"></span>
            <div>
              <h3 class="card-title">{{ v.title }}</h3>
              <span class="card-subtitle">{{ v.subtitle }}</span>
            </div>
          </div>
          <p class="card-desc">{{ v.desc }}</p>
          <ul class="card-items">
            <li v-for="(item, j) in v.items" :key="j">
              <span class="item-dot"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vision {
  background: white;
}

.vision-header {
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

.vision-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.vision-card {
  background: var(--cream);
  border-radius: 20px;
  padding: 36px 32px;
  border: 1px solid rgba(0, 154, 91, 0.08);
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.vision-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--primary);
  border-radius: 0 4px 4px 0;
  opacity: 0;
  transition: opacity 0.3s;
}

.vision-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 154, 91, 0.1);
  border-color: var(--primary);
}

.vision-card:hover::before {
  opacity: 1;
}

.card-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 154, 91, 0.1);
  border-radius: 12px;
  flex-shrink: 0;
  color: var(--primary);
  padding: 10px;
}

.card-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.card-subtitle {
  font-size: 0.8rem;
  color: var(--primary);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.card-desc {
  font-size: 16px;
  color: var(--text-body);
  margin-bottom: 20px;
  line-height: 24px;
  font-weight: 700;
}

.card-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-items li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-body);
}

.item-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  margin-top: 9px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .vision-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .vision-card {
    padding: 28px 24px;
  }
}
</style>
