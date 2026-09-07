/* main.js — 네비 토글 · 스크롤 등장 · 현재 페이지 표시 · 연도 · 폼 상태 */
(function () {
  'use strict';

  // 1) 모바일 네비 토글
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // 2) 현재 페이지 네비 활성화
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here || (here === 'index.html' && href === './') || href === './' + here) {
      a.classList.add('active');
    }
  });

  // 2-1) 부업 관리 드롭다운
  var drop = document.querySelector('.nav-dropdown');
  if (drop) {
    var dToggle = drop.querySelector('.nav-drop-toggle');
    // 현재 페이지가 드롭다운 하위면 토글을 활성 표시
    if (drop.querySelector('.nav-drop-menu a.active')) {
      dToggle.classList.add('active');
    }
    dToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = drop.classList.toggle('open');
      dToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!drop.contains(e.target)) {
        drop.classList.remove('open');
        dToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3) 스크롤 등장 애니메이션
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el, i) {
    el.style.transitionDelay = (i % 4) * 60 + 'ms';
    io.observe(el);
  });

  // 4) 푸터 연도
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // 5) Web3Forms 문의 폼 (백엔드 없음) — access key 는 contact.html 의 hidden 필드로 주입
  var form = document.getElementById('contact-form');
  if (form) {
    var statusEl = document.getElementById('form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var key = form.querySelector('[name="access_key"]');
      if (!key || !key.value || key.value.indexOf('YOUR_') === 0) {
        if (statusEl) {
          statusEl.textContent = '문의 폼이 아직 설정 전입니다. 아래 전화/이메일로 연락 주세요.';
          statusEl.style.color = 'var(--gold)';
        }
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = '보내는 중…'; }
      if (statusEl) { statusEl.textContent = ''; }

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            if (statusEl) { statusEl.textContent = '보냈습니다. 빠르게 회신드리겠습니다.'; statusEl.style.color = 'var(--mint)'; }
          } else {
            throw new Error(data.message || '전송 실패');
          }
        })
        .catch(function (err) {
          if (statusEl) { statusEl.textContent = '전송에 실패했습니다: ' + err.message; statusEl.style.color = 'var(--danger)'; }
        })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = '문의 보내기'; }
        });
    });
  }
})();
