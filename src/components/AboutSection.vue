<script setup>
import { ref } from 'vue'

const expanded = ref(false)

const highlights = [
  {
    icon: '🎓',
    title: '國際進修',
    desc: '美國維吉尼亞大學、瑞典卡羅林斯卡學院、紐約西奈山醫院等海外學術交流',
  },
  {
    icon: '🤖',
    title: '手術創新',
    desc: '機械手臂手術先驅，師承國際頂尖泌尿腫瘤專家',
  },
  {
    icon: '🏥',
    title: '公衛推動',
    desc: '1999年起持續推動攝護腺篩檢，發起萬人篩檢行動',
  },
  {
    icon: '🌏',
    title: '國際會議',
    desc: '主辦四次大型國際泌尿醫學會議，邀請超過百位國際專家來台',
  },
]
</script>

<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="about-header fade-in">
        <span class="section-label">關於歐院長</span>
        <h2 class="section-title">誠信、認真、可溝通<br>不逃避問題</h2>
        <div class="section-line"></div>
      </div>

      <div class="about-grid">
        <div class="about-text fade-in-left">
          <p class="lead-text">
            台灣泌尿科醫學會自1978年成立以來，陪伴台灣醫療體系走過近半世紀的重要歷程。這不只是一個學會的成長史，更是一代又一代泌尿科醫師，為病人、為社會、為專業全心付出的共同記憶。
          </p>
          <p>
            宴泉於1979年進入醫學院，1986年在台中榮總接受泌尿科住院醫師訓練。回首這條行醫之路，我的學習、服務與成長，幾乎與學會的發展同步前行。一路走來，承蒙無數師長的提攜與指導，以及會員夥伴長年的信任與支持，讓我始終心懷感恩，也更加堅定「回饋學會、承擔責任」的初衷。
          </p>

          <div v-if="expanded" class="expanded-text">
            <p>
              1997至1999年間，我赴美國維吉尼亞大學追隨 Prof. Leland W. K. Chung 教授進修泌尿腫瘤學；返國後，持續投入泌尿腫瘤與機械手臂手術的臨床、教學與推廣。2005年起師承 Dr. Vipul Patel，2009年向 Dr. Ash Tewari 教授學習，2013年於瑞典卡羅林斯卡學院接受 Dr. Peter Wiklund 教授指導，並曾赴紐約西奈山醫院、費城天普醫院交流。這些跨國學習的歷程，讓我深刻體會：專業的高度，來自長期累積；醫療的價值，源於對病人的承諾。
            </p>
            <p>
              1999年起，我在苗栗公館鄉舉辦第一場攝護腺健康活動，並持續至今，每年不間斷推動篩檢與衛教。2016年起，更發起萬人攝護腺篩檢行動；2024與2025年，成功串聯全國泌尿科力量，共同呼籲政府將「攝護腺癌篩檢」納入國健署第六癌公費篩檢。這不是一個人的努力，而是整個泌尿科社群共同守護國人健康的信念。
            </p>
            <p>
              本會會員編號第1號的方甘棠老師，數十年如一日親臨年會與半年會，那份對學會的熱情與堅持，始終深深感動我，也成為我服務學會、提攜後進的重要精神指引。承蒙多位師長與好友的勉勵與勸進，讓我更加確信：在此關鍵時刻，我有責任為學會承擔更大的使命。
            </p>
            <p>
              特別感謝楊啟瑞主任多年來如師如父的教導與栽培，提攜後進、培育無數泌尿科人才。這份知遇之恩，我銘感於心，也期許自己能將這樣的精神持續傳承。因此，我將正式投入 2026年台灣泌尿科醫學會第25屆理事長選舉，願以累積數十年的經驗，為學會、為會員服務。
            </p>
            <p>
              回顧在學會的服務歷程，我有幸歷任一屆監事、九屆理事、四個重要委員會主任委員，並兩度承擔副理事長重任。每一個角色，我都以謙卑學習、務實行動回應會員的期待。我始終相信，學會的成長不是激情口號，而是仰賴穩健制度、清楚方向與世代傳承，才能走得長、走得遠。
            </p>
            <p>
              在大家的支持下，我們曾舉辦四次大型國際泌尿醫學會議(ERUS, TICS)，邀請超過百位國際泌尿腫瘤與機械手臂專家來台交流，將台灣的臨床成果推向國際舞台，也讓世界清楚看見台灣泌尿科的實力與價值。
            </p>
            <p>
              未來，我願以穩健的步伐，廣泛傾聽不同世代、每一個會員的聲音，凝聚最大共識，推動制度穩定與世代接軌，讓台灣泌尿科醫學持續向前、走向世界。
            </p>
          </div>

          <button class="expand-btn" @click="expanded = !expanded">
            {{ expanded ? '收合內容' : '閱讀更多' }}
            <svg :class="{ rotated: expanded }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>

        <div class="about-image fade-in-right">
          <div class="image-frame">
            <img src="/images/doctor-action.png" alt="歐宴泉院長" />
          </div>
          <div class="image-caption">
            <span class="caption-name">歐宴泉</span>
            <span class="caption-role">童綜合醫院 研發創新中心院長</span>
          </div>
        </div>
      </div>

      <div class="highlights fade-in">
        <div class="highlight-card" v-for="(item, i) in highlights" :key="i">
          <span class="highlight-icon">{{ item.icon }}</span>
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--cream);
}

.about-header {
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

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: start;
  margin-bottom: 60px;
}

.image-frame {
  background: linear-gradient(135deg, #e8f5ef, #d0ebe0);
  border-radius: 20px;
  overflow: hidden;
  padding: 30px 30px 0;
  display: flex;
  justify-content: center;
}

.image-frame img {
  width: 100%;
  max-width: 380px;
  object-fit: contain;
}

.image-caption {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}

.caption-name {
  font-family: 'Noto Serif TC', serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-dark);
}

.caption-role {
  font-size: 0.9rem;
  color: var(--text-light);
}

.about-text {
  padding-top: 16px;
}

.lead-text {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-dark);
  line-height: 2;
  margin-bottom: 20px;
}

.about-text p {
  margin-bottom: 16px;
  line-height: 2;
  text-align: justify;
}

.expanded-text {
  animation: fadeInDown 0.5s ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.expand-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 10px 24px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 8px;
  font-family: 'Noto Sans TC', sans-serif;
}

.expand-btn:hover {
  background: var(--primary);
  color: white;
}

.expand-btn svg {
  transition: transform 0.3s;
}

.expand-btn svg.rotated {
  transform: rotate(180deg);
}

.highlights {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.highlight-card {
  background: white;
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  transition: all 0.3s;
  border: 1px solid rgba(0, 154, 91, 0.08);
}

.highlight-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 154, 91, 0.12);
  border-color: var(--primary);
}

.highlight-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 12px;
}

.highlight-card h4 {
  font-size: 1.05rem;
  margin-bottom: 8px;
  color: var(--primary-dark);
}

.highlight-card p {
  font-size: 0.88rem;
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .highlights {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .highlights {
    grid-template-columns: 1fr;
  }
}
</style>
