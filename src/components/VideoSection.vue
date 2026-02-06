<template>
  <section id="video" class="video-section section">
    <div class="container">
      <div class="video-header fade-in">
        <span class="section-label">影音專區</span>
        <h2 class="section-title">聽歐院長親自說明</h2>
        <div class="section-line"></div>
      </div>
      <div class="video-wrapper fade-in">
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

.video-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.video-frame {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
}

.video-frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .video-frame {
    border-radius: 14px;
  }
}
</style>
