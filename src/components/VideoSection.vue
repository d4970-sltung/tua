<template>
  <section id="video" class="video-section section">
    <div class="container">
      <div class="video-header fade-in">
        <span class="section-label">影音專區</span>
        <h2 class="section-title">聽歐院長親自說明</h2>
        <div class="section-line"></div>
      </div>
      <div class="video-grid fade-in">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/GTUPT1J5iuU"
            title="TIMA X TICS2025: GLOBAL CONNECTION 國際研討會"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/X2-ya31sMiY?si=Hl54xLa_szrV1T45"
            title="歐宴泉醫師影片"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/-NcRzXQQvTg?si=0hetHOug-fdVcQeQ"
            title="台灣新創醫學會率先發起全台聯合倡議－攝護腺癌納入公費癌症篩檢！"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/LJsiYQ2zmvQ?si=LX_Wn7KccxZFYxyG"
            title="童綜合醫院TICS2024:「NEW HORIZONS IN UROLOGICAL HEALTHCARE」國際研討會"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/dgdjQ0h9pSU?si=fIQGd122oGIzb1Vt"
            title="童綜合醫院TICS2023：「The Future of Integrative UroTech」國際研討會"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/aMEIL-S68WY?si=28v7IGchyBqhCFte"
            title="童綜合醫院 誠摯邀請您一同交流 【2019 ERUS 國際學術交流研討會】"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  background: white;
}

.video-header {
  text-align: center;
  margin-bottom: 48px;
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

.video-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 25px;
  max-width: 1100px;
  margin: 0 auto;
}

.video-frame:nth-child(1),
.video-frame:nth-child(2),
.video-frame:nth-child(3) {
  grid-column: span 2;
}

.video-frame:nth-child(4),
.video-frame:nth-child(5),
.video-frame:nth-child(6) {
  grid-column: span 2;
}

.video-frame {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
}

.video-frame iframe,
.video-frame video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .video-frame:nth-child(1),
  .video-frame:nth-child(2),
  .video-frame:nth-child(3),
  .video-frame:nth-child(4),
  .video-frame:nth-child(5),
  .video-frame:nth-child(6) {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }

  .video-frame {
    border-radius: 12px;
  }
}
</style>
