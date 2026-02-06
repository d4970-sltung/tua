<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-info">
          <div class="footer-brand">
            <img src="/images/logo.png" alt="童綜合醫院" class="footer-logo" />
            <div>
              <h3>童綜合醫院</h3>
              <p class="brand-en">Tungs' Taichung MetroHarbor Hospital</p>
            </div>
          </div>
          <p class="footer-address">
            435403 臺中市梧棲區臺灣大道八段699號<br>
            No.699, Sec.1, Chungchi Rd., Wuchi, Taichung, 43503, Taiwan, R.O.C.
          </p>
        </div>

        <div class="footer-contact">
          <h4>聯絡方式</h4>
          <ul>
            <li>
              <span class="contact-label">電話</span>
              <a href="tel:+886426581919">886-4-26581919</a>
            </li>
            <li>
              <span class="contact-label">傳真</span>
              <span>886-4-26581155</span>
            </li>
            <li>
              <span class="contact-label">急診專線</span>
              <a href="tel:0800557995">0800-557-995</a>
            </li>
            <li>
              <span class="contact-label">醫病關係</span>
              <a href="tel:0800461046">0800-461-046</a>
            </li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>相關連結</h4>
          <ul>
            <li><a href="https://www.sltung.com.tw" target="_blank" rel="noopener">www.sltung.com.tw</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} 童綜合醫療社團法人童綜合醫院. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1a2e28;
  color: rgba(255, 255, 255, 0.7);
  padding: 60px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.footer-logo {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: contain;
}

.footer-brand h3 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2px;
}

.brand-en {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.footer-address {
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.5);
}

.footer-contact h4,
.footer-links h4 {
  color: white;
  font-size: 1rem;
  margin-bottom: 16px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 600;
}

.footer-contact ul,
.footer-links ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
}

.contact-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  min-width: 60px;
}

.footer-contact a,
.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.88rem;
}

.footer-contact a:hover,
.footer-links a:hover {
  color: var(--primary-light);
}

.footer-bottom {
  padding: 20px 0;
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
