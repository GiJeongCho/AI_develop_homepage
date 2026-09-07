# AI_develop_homepage — 구조 & 사용법

`FISH-AI` (조기정) **AI 개발·자동화 영업/포트폴리오 사이트**.
빌드 도구·백엔드 없이 **정적 파일만으로 동작**하는 7페이지 웹사이트입니다.

- 도메인(예정): http://fish-ai-develop.kro.kr
- 운영 중 서비스(외부 링크): http://netbitrage.kro.kr
- 리포지토리: https://github.com/GiJeongCho/AI_develop_homepage

---

## 1. 디렉터리 구조

```
AI_develop_homepage/
├─ index.html          # 메인(홈)
├─ about.html          # 경력·이력·기술 스택
├─ services.html       # 제공 서비스 6종
├─ projects.html       # 대표 프로젝트 8건
├─ resell.html         # 제품 랜딩: 리셀 자동화(무신사→포이즌)
├─ make_shorts.html    # 제품 랜딩: AI 쇼츠 메이커(내 API 키)
├─ contact.html        # 문의 폼 · 연락처 · QR
├─ css/
│  └─ style.css        # 디자인 시스템 (다크 네이비 + 민트/시안), 반응형
├─ js/
│  └─ main.js          # 네비 토글 · 스크롤 애니메이션 · 문의 폼 전송
├─ image/
│  ├─ qr-fish-ai-develop.png   # 사이트 QR (contact 페이지용)
│  └─ qr-fish-ai-develop.svg
├─ docs/
│  ├─ plan.md          # 기획/작업 플랜
│  ├─ resume_facts.md  # 콘텐츠 근거(사실관계) — 문구 작성 시 참고 원본
│  ├─ my_resume/       # 원본 이력서 (⚠️ .gitignore 로 커밋 제외)
│  └─ SITE_GUIDE.md    # (이 문서)
├─ README.md
└─ .gitignore          # docs/my_resume/ 등 개인문서 제외
```

> ⚠️ **개인정보**: `docs/my_resume/` 는 `.gitignore` 로 제외되어 있어 GitHub 에 올라가지 않습니다. 새 개인문서를 넣을 때도 이 폴더에 두세요.

---

## 2. 페이지별 구조

### `index.html` (홈)
섹션 순서 (위 → 아래):
1. **Hero** — 헤드라인 + 요약 문구 + CTA 버튼 + 요점 3개(직접 개발·운영 / AI·자동화 / 정직한 견적) + 기술 스택 카드
2. **주로 이런 걸 만듭니다** — 핵심 역량 4개 카드(영상 AI / 문서 LLM / 파인튜닝 / 업무·부업 자동화)
3. **숫자로 남은 결과** — 정량 성과 stats (조건에 따라 달라질 수 있음 캐비어트 포함)
4. **서비스 요약** — 6개 서비스 축약 카드 (상세는 `services.html`)
5. **Netbitrage** — 직접 만든 대표작(자동매매) 소개 + 외부 링크
6. **신뢰 배지** — 특허/논문/자격/수상
7. **CTA** — 문의 유도

> 🔧 홈에는 **경력 타임라인을 두지 않습니다.** 경력/이력은 `about.html` 로 분리했습니다. (과장·"만능" 톤을 피하고 악성 문의를 줄이기 위한 방침)

### `about.html`
경력 타임라인(석사 연구 → Edutem → PPS 팀장) · 학력/자격/특허/논문/수상 · 기술 스택.

### `services.html`
수주 관점의 6개 서비스 상세 (실시간 영상 트래킹 / 온프레미스 RAG-LLM / LLM 파인튜닝 / AI 에이전트·자동화 / 데이터·최적화 / API·배포).

### `projects.html`
대표 프로젝트 8건 (태그·지표 포함, 일부 고객사/기관명은 추상화).

### `resell.html` (제품 랜딩 — 리셀 자동화)
직접 만든 **무신사→포이즌(得物) 리셀 자동화** 프로그램의 판매/도입 랜딩.
섹션: Hero → 문제 제기(수작업 한계) → 작동 흐름 6단계(발견→비교→등록→유지→판매→기록) → 핵심 강점(진짜차익/오매칭 가드/레이트리밋/운영 자동화 등) → 진짜차익 공식 → 한 줄 메시지 → 타깃 고객 → 안전장치·유의사항 → CTA(문의).
문구 근거: `../../resell/docs/제품_강점_및_마케팅.md`·`운영_가이드.md`·`ARCHITECTURE.md` (과장 없이 요약, 리스크 고지 포함).

### `make_shorts.html` (제품 랜딩 — AI 쇼츠 메이커)
**내 API 키**로 단계별 리더보드에서 최신 최고 모델을 골라 세로형 쇼츠를 자동 생성하는 데스크톱 앱의 랜딩.
섹션: Hero → 문제 제기 → 핵심 강점(내 키/리더보드/파이프라인/미리보기·채팅 수정/9:16 자막/오프라인 데모) → 단계별 지원 모델 → 작동 흐름 3단계 → '내 키'가 유리한 이유 → 타깃 고객 → 유의사항 → CTA(문의).
문구 근거: `../../make_shorts/docs/ARCHITECTURE.md`·`README.md`.

### `contact.html`
- Web3Forms 문의 폼 (이름/이메일/전화/주제/내용)
- 직접 연락처: 전화 `010-2656-5690`, 이메일 `wzxcv123@naver.com`
- 사이트 QR(`image/qr-fish-ai-develop.png`)
- 외부 링크: GitHub / 블로그 / Notion / Netbitrage

---

## 3. 디자인 시스템 (`css/style.css`)

CSS 변수(`:root`)로 토큰 관리 — 색을 바꾸려면 여기만 수정:

| 토큰 | 값 | 용도 |
|---|---|---|
| `--bg` / `--bg-2` | `#0a0f1c` / `#0e1526` | 배경 |
| `--panel` / `--panel-2` | `#121a2e` / `#16203a` | 카드/패널 |
| `--text` / `--text-2` / `--muted` | `#e8eefb` / `#9fb0cf` / `#6f80a3` | 본문 텍스트 3단계 |
| `--mint` / `--cyan` | `#35e0c1` / `#4aa8ff` | 포인트 컬러 |
| `--grad` | mint → cyan | 그라디언트(제목·버튼) |
| `--radius` / `--maxw` | `16px` / `1120px` | 라운드 / 최대 폭 |

**공통 클래스**: `.wrap`(레이아웃 폭), `.btn`/`.btn-primary`/`.btn-ghost`/`.btn-lg`(버튼), `.card`(카드), `.grad-text`(그라디언트 글자), `.section-head`/`.section-title`/`.section-sub`(섹션 헤더), `.badge`(배지), `.reveal`(스크롤 등장 대상).

반응형: 모바일에서 네비가 햄버거(`.nav-toggle`)로 접힘.

---

## 4. 스크립트 동작 (`js/main.js`)

백엔드 없이 순수 프론트에서 처리:
1. **모바일 네비 토글** — `.nav-toggle` 클릭 시 메뉴 열림/닫힘
2. **현재 페이지 표시** — URL 기준으로 네비 링크에 `.active` (현재 페이지가 `resell.html`/`make_shorts.html`이면 `부업 관리` 토글에도 `.active`)
2-1. **부업 관리 드롭다운** — 헤더 우측 `부업 관리` 버튼 클릭 시 하위 메뉴(리셀 자동화·쇼츠 메이커) 토글, 바깥 클릭 시 닫힘. 상단 메뉴 항목 수를 줄이기 위해 두 제품 링크를 이 드롭다운으로 묶음(푸터에는 개별 링크 유지)
3. **스크롤 등장 애니메이션** — `.reveal` 요소를 `IntersectionObserver` 로 감지해 `.in` 부여
4. **푸터 연도 자동 갱신** — `#year`
5. **문의 폼 전송** — `#contact-form` 을 [Web3Forms](https://web3forms.com) API 로 전송. `access_key` 가 미설정(`YOUR_...`)이면 전송하지 않고 "전화/이메일로 연락" 안내 표시.

---

## 5. 로컬 실행

빌드가 없으므로 아무 정적 서버로 열면 됩니다.

```bash
cd AI_develop_homepage
python -m http.server 5500
# 브라우저에서 http://localhost:5500 접속
```

> 파일을 `file://` 로 직접 열어도 대부분 보이지만, 폼/일부 동작은 서버로 여는 것을 권장합니다.

---

## 6. 콘텐츠 수정 방법

- **문구/섹션**: 각 `*.html` 을 직접 편집. 문장 근거는 `docs/resume_facts.md` 참고(사실과 다른 과장 금지).
- **색/스타일**: `css/style.css` 의 `:root` 토큰 우선 수정.
- **동작**: `js/main.js`.
- **연락처/링크**: `contact.html` 하단 및 폼 hidden 필드.

---

## 7. 배포 전 체크리스트

- [x] **문의 폼 활성화**: `contact.html` 의 `access_key` 를 실제 Web3Forms Access Key 로 교체 완료. (수신 메일은 키 발급 시 등록한 주소로 감)
- [ ] 표시 이메일(`wzxcv123@naver.com`)·전화(`010-2656-5690`) 최종 확인.
- [ ] 고객사/국방 프로젝트 실명 노출 여부 확인(기본: 추상화 유지).
- [ ] 도메인(`fish-ai-develop.kro.kr`) 연결 후 **QR 재검증** (URL 바뀌면 QR 재생성 필요).
- [ ] `docs/my_resume/` 등 개인문서가 커밋에 포함되지 않았는지 `git status` 로 확인.

### QR 재생성 (URL 변경 시)
`image/qr-fish-ai-develop.{png,svg}` 를 새 URL 로 다시 만들면 됩니다. (예: `segno` 등 QR 라이브러리로 `http://<도메인>` 인코딩)

---

## 8. Git 워크플로

```bash
git add .
git commit -m "메시지"
git push origin main
```

- 원격: `origin` → https://github.com/GiJeongCho/AI_develop_homepage.git
- 기본 브랜치: `main`
- **주의**: `docs/my_resume/` 는 `.gitignore` 로 제외. 개인문서 커밋 금지.

---

## 9. 브랜딩 메모

- **개인 개발 브랜드 = `FISH-AI`** (이 사이트/명함 메인)
- **Netbitrage = 직접 만들어 운영하는 대표작(자동매매)** → 신뢰 증거로 노출, 별도 트레이딩 사이트로 링크
- 톤: "만능"처럼 광고하지 않고 **직접 해본 것만 정직하게** 제시 → 잘못된 기대/악성 문의 최소화
- 사업자 없이도 포트폴리오·문의 접수는 가능(계약·정산 단계에서 프리랜서 3.3% 또는 기존 사업자 활용). 세무 상세는 별도 확인 권장.
