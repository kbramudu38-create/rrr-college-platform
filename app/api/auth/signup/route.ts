* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, #edfdfd 0%, #eaf9ff 100%);
  color: #12314a;
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, textarea, select {
  font: inherit;
}

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #dff8ff 0%, #bfeef1 100%);
  padding: 32px;
}

.auth-card,
.content-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(32, 139, 162, 0.12);
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(15, 110, 126, 0.12);
}

.auth-card {
  width: min(760px, 100%);
  padding: 32px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 22px;
}

.rrr-logo {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #14b8d6, #0d6ea6);
  color: white;
  font-weight: 800;
  font-size: 1.7rem;
  box-shadow: 0 12px 24px rgba(12, 152, 176, 0.25);
}

.rrr-logo.small {
  width: 48px;
  height: 48px;
  font-size: 1.1rem;
}

.eyebrow {
  margin: 0 0 6px;
  color: #0f8ad6;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
}

h1, h2, h3, p {
  margin-top: 0;
}

.toggle-row {
  display: flex;
  gap: 10px;
  background: #edf9ff;
  border-radius: 12px;
  padding: 6px;
  margin-bottom: 20px;
}

.toggle-row button {
  flex: 1;
  border: none;
  background: transparent;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 700;
  color: #116d8a;
  cursor: pointer;
}

.toggle-row .active {
  background: linear-gradient(135deg, #0ea5c5, #0d6ea6);
  color: white;
}

.stack-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

input, textarea, select {
  width: 100%;
  border: 1px solid rgba(14, 103, 117, 0.18);
  background: #fbfeff;
  border-radius: 12px;
  padding: 12px 14px;
  color: #12314a;
}

textarea {
  min-height: 90px;
  resize: vertical;
}

.two-col {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, #0ea5c5, #0d6ea6);
  color: white;
}

.primary-btn.small,
.secondary-btn.small {
  padding: 8px 12px;
  font-size: 0.92rem;
}

.secondary-btn {
  background: #ecfbff;
  color: #0e5d7a;
  border: 1px solid rgba(14, 92, 117, 0.16);
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 28px 18px 64px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.topnav {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  color: #1f526f;
  font-weight: 600;
}

.cover-card {
  padding: 26px 28px;
  border-radius: 26px;
  background: linear-gradient(135deg, rgba(15, 185, 210, 0.18), rgba(13, 110, 166, 0.16));
  border: 1px solid rgba(15, 103, 141, 0.12);
  box-shadow: 0 16px 30px rgba(14, 100, 105, 0.08);
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
  margin-bottom: 20px;
}

.searchbox {
  min-width: 280px;
  flex: 1;
}

.searchbox input {
  background: rgba(255, 255, 255, 0.9);
}

.category-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.chip {
  background: #ebfdff;
  border: 1px solid rgba(18, 144, 153, 0.1);
  border-radius: 999px;
  padding: 8px 12px;
  color: #0d6f8a;
  font-size: 0.8rem;
  font-weight: 700;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 22px 0 18px;
}

.grid-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.grid-items.compact {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.item-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(14, 121, 148, 0.08);
  box-shadow: 0 12px 26px rgba(14, 117, 146, 0.07);
}

.item-image-wrap {
  position: relative;
  height: 220px;
  background: #dfeef7;
}

.item-image,
.detail-image {
  object-fit: cover;
}

.wishlist-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  font-size: 1.2rem;
  cursor: pointer;
}

.item-body {
  padding: 16px;
}

.meta-row,
.price-row,
.tiny-lines,
.cta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.meta-row {
  margin-bottom: 10px;
}

.badge {
  display: inline-block;
  background: #ebfdff;
  color: #0f587d;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.74rem;
  font-weight: 700;
}

.muted {
  color: #56748e;
}

.tiny-lines {
  color: #4f6e84;
  font-size: 0.83rem;
  margin: 12px 0;
}

.cta-row {
  margin-top: 12px;
}

.narrow {
  max-width: 760px;
  margin: 0 auto;
}

.content-card {
  padding: 24px;
}

.checkline {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #24516b;
}

.checkline input {
  width: auto;
}

.status-pill {
  border-radius: 10px;
  padding: 10px 12px;
  background: #eefafa;
  color: #0f6785;
  font-size: 0.9rem;
}

.status-pill.success {
  background: #ecfff3;
  color: #0d7d58;
}

.status-pill.danger {
  background: #fff0f2;
  color: #b12d4a;
}

.detail-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
}

.detail-image-wrap {
  position: relative;
  height: 360px;
  margin-bottom: 18px;
  border-radius: 18px;
  overflow: hidden;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 16px;
}

.request-row {
  background: #f7feff;
  border: 1px solid rgba(18, 125, 135, 0.08);
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin: 18px 0 22px;
}

.stat-box {
  background: #ebfdff;
  border-radius: 16px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #114b67;
}

.table-box {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

.table-box th,
.table-box td {
  text-align: left;
  padding: 12px 10px;
  border-bottom: 1px solid rgba(17, 99, 127, 0.12);
}

@media (max-width: 900px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }

  .cover-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .two-col,
  .info-grid {
    grid-template-columns: 1fr;
  }

  .page-shell {
    padding-left: 12px;
    padding-right: 12px;
  }

  .auth-card,
  .content-card {
    padding: 18px;
  }
}
