# AI_develop_homepage

**조기정(Gijeong Cho) · AI 개발자 개인 브랜드/영업용 사이트.**
"AI 개발이 필요한 사람이 찾아와 일을 맡길 수 있는" 것을 목표로 한 정적 웹사이트입니다.

- 도메인(예정): http://fish-ai-develop.kro.kr
- 트레이딩 하위 사이트(외부 링크): http://netbitrage.kro.kr

## 구성 (5페이지 · 빌드 도구 없음)

| 파일 | 내용 |
|---|---|
| `index.html` | 메인 — Hero · 핵심 강점 · 성과 · 서비스 요약 · Netbitrage · 신뢰 배지 · CTA (경력은 about 로 분리) |
| `about.html` | 경력 타임라인(석사 → Edutem → PPS 팀장) · 학력/자격/특허/논문 · 기술 스택 |
| `services.html` | 수주 관점 6개 서비스 |
| `projects.html` | 대표 프로젝트 8건 (일부 고객사/기관명 추상화) |
| `contact.html` | 문의 폼(Web3Forms) · 연락처 · QR · 링크 |
| `css/style.css` | 다크 네이비 + 민트/시안 디자인 시스템, 반응형 |
| `js/main.js` | 모바일 네비 · 스크롤 등장 애니메이션 · 폼 전송 |
| `image/qr-*.{png,svg}` | 사이트 QR 코드 |
| `docs/` | 구조·사용법(`SITE_GUIDE.md`) · 작업 플랜(`plan.md`) · 사실관계(`resume_facts.md`) |

## 로컬 실행

정적 파일이라 별도 빌드가 없습니다. 아무 정적 서버로 열면 됩니다.

```bash
python -m http.server 5500
# http://localhost:5500 접속
```

## 배포 전 체크리스트

- [ ] **문의 폼**: `contact.html` 의 `access_key` 를 실제 [Web3Forms](https://web3forms.com) Access Key 로 교체.
- [ ] 표시 이메일(`wzxcv123@naver.com`) · 전화(`010-2656-5690`) 확인.
- [ ] 고객사/국방 프로젝트 실명 노출 여부 최종 확인(기본: 추상화).
- [ ] 도메인(`fish-ai-develop.kro.kr`) 연결 후 QR 재검증.

## 크레딧

콘텐츠 근거: `docs/resume_facts.md` · 계획: `docs/plan.md`.
© 조기정 (Gijeong Cho).
