<template>
  <section class="closing section">
    <div class="container">
      <div class="closing-content fade-in">
        <p class="closing-belief">
        </p>
        <h2>讓我們以累積的經驗承擔責任，以共同的共識凝聚力量</h2>
        <p>
          為台灣泌尿科醫學會開創更穩健、長遠的未來
        </p>
        <p class="closing-ask">敬請指教，也誠摯拜託大家成全與支持。</p>
        <div class="closing-signature">
          <span class="sig-org">童綜合醫院 研發創新中心院長</span>
          <span class="sig-name">歐宴泉 敬上</span>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.closing {
  background: linear-gradient(180deg, white 0%, var(--primary-bg) 100%);
  text-align: center;
}

.closing-content {
  max-width: 800px;
  margin: 0 auto;
}

.closing-content h2 {
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 16px;
  color: var(--text-dark);
}

.closing-content p {
  font-size: 1.1rem;
  color: var(--text-body);
  margin-bottom: 36px;
}

.closing-signature {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sig-org {
  font-size: 0.9rem;
  color: var(--text-light);
}

.sig-name {
  font-family: 'Noto Serif TC', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-dark);
}

.sig-date {
  font-size: 0.85rem;
  color: var(--text-light);
}

.closing-belief {
  font-size: 1.05rem;
  color: var(--text-body);
  line-height: 1.9;
  margin-bottom: 20px;
}

.closing-wish {
  margin-bottom: 20px;
}

.closing-wish p {
  font-size: 1rem;
  color: var(--text-body);
  margin-bottom: 4px;
}

.wish-text {
  font-family: 'Noto Serif TC', serif;
  font-weight: 600;
  color: var(--primary-dark) !important;
  font-size: 1.1rem !important;
}

.closing-ask {
  font-size: 1rem;
  color: var(--text-body);
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .closing-content h2 {
    font-size: 1.4rem;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
}
</style>
