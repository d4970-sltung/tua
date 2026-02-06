<template>
  <section class="quote-section">
    <div class="container">
      <div class="quote-content fade-in">
        <svg class="quote-mark" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
        </svg>
        <blockquote>
          <p class="quote-text">
            我雖然走得慢，但我從不停止前進。
          </p>
          <p class="quote-en">I am a slow walker, but I never walk backward.</p>
        </blockquote>
        <cite class="quote-author">— 亞伯拉罕．林肯 Abraham Lincoln</cite>
        <p class="quote-comment">
          真正重要的，不是快慢，而是方向是否正確、腳步是否踏實。
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quote-section {
  background: linear-gradient(135deg, #003d25 0%, #004d2e 50%, #006b3e 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.quote-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(0, 154, 91, 0.15), transparent 70%);
}

.quote-content {
  position: relative;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.quote-mark {
  color: white;
  margin-bottom: 16px;
}

.quote-text {
  font-family: 'Noto Serif TC', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  line-height: 1.6;
  margin-bottom: 8px;
}

.quote-en {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin-bottom: 20px;
}

.quote-author {
  display: block;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  font-style: normal;
  margin-bottom: 28px;
}

.quote-comment {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 24px;
}

@media (max-width: 768px) {
  .quote-text {
    font-size: 1.4rem;
  }
}
</style>
