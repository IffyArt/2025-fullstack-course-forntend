# 2025 全端開發課程 - 前端專案

這是一個基於 [Next.js](https://nextjs.org) 的全端開發課程前端專案，使用 TypeScript 和現代化的 React 開發工具。

## 專案架構

### 技術棧

- **框架**: Next.js 16.0.0 (Pages Router)
- **語言**: TypeScript 5
- **UI 框架**: Chakra UI 3.28.0
- **UI 庫**: React 19.2.0
- **樣式引擎**: Emotion 11.14.0
- **主題管理**: next-themes 0.4.6
- **圖標庫**: react-icons 5.5.0

### 專案結構

```
src/
├── pages/                 # Next.js 頁面路由
│   ├── _app.tsx          # 應用程式根組件 (包含 Chakra UI Provider)
│   ├── _document.tsx     # HTML 文檔結構
│   └── index.tsx         # 首頁
├── components/           # React 組件
│   └── ui/               # Chakra UI 組件
│       ├── provider.tsx  # Chakra Provider 配置
│       └── color-mode.tsx # 深色模式組件
├── fixtures/             # 配置和固定資料
│   └── theme/            # Chakra UI 主題配置
│       ├── index.ts      # 自定義系統配置
│       ├── colors.ts     # 顏色配置
│       └── layer-styles.ts # 圖層樣式配置
└── ...                   # 其他源碼目錄
```

### 核心功能

- **Chakra UI 整合**: 已配置自定義主題系統和 Provider
- **深色模式支援**: 完整的亮色/深色模式切換功能
- **自定義主題**: 可擴展的顏色、圖層樣式配置
- **TypeScript 支援**: 完整的型別檢查和路徑別名 (`@/*`)
- **現代化 UI**: 使用 Chakra UI v3 建構美觀的使用者介面

## 開始使用

### 安裝依賴

```bash
npm install
```

### 開發伺服器

```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

### 建置專案

```bash
npm run build
npm start
```

### 程式碼檢查

```bash
npm run lint
```

## 開發指南

### 頁面開發

- 在 `src/pages/` 目錄下建立新的 `.tsx` 檔案來新增頁面
- 使用 `@/` 路徑別名來引用 `src/` 目錄下的檔案
- 所有頁面都會自動獲得 Chakra UI Provider 的功能
- 可直接使用 Chakra UI 組件建構介面

### 主題客製化

- 在 `src/fixtures/theme/` 目錄下編輯主題配置
- `colors.ts`: 定義自定義顏色色票
- `layer-styles.ts`: 定義可重用的圖層樣式
- `index.ts`: 整合並導出自定義系統配置

### UI 組件

- 在 `src/components/ui/` 目錄下存放 Chakra UI 相關組件
- `provider.tsx`: Chakra UI Provider 配置
- `color-mode.tsx`: 深色模式切換功能

### API 路由

- 在 `src/pages/api/` 目錄下建立 API 路由
- 檔案會自動對應到 `/api/*` 路徑

## 專案特色

- **現代化開發體驗**: TypeScript + ESLint + Chakra UI
- **完整主題系統**: 自定義顏色、樣式和設計系統
- **深色模式**: 內建亮色/深色模式切換
- **型別安全**: 完整的 TypeScript 支援
- **開發工具**: 熱重載和快速刷新
- **元件化設計**: 使用 Chakra UI 組件快速建構介面

## 📚 教學資源

本專案提供完整的教學文件，適合初學者和教學使用：

### [📖 TUTORIAL.md](./TUTORIAL.md)

**完整的逐步教學指南**

- 從零開始建立專案
- 詳細的設定步驟
- 每個檔案的建立和說明
- 常見問題與解決方案
- 進階擴展範例

**適合對象**：第一次接觸 Next.js 或 Chakra UI 的學生

### [📋 COURSE-OUTLINE.md](./COURSE-OUTLINE.md)

**課程規劃與教學大綱**

- 4-6 小時完整課程規劃
- 7 個階段的學習路徑
- 每階段的學習目標和內容
- 實作練習和作業安排
- 評量方式和評估指標
- 授課建議和教學方法

**適合對象**：授課教師和課程規劃者

### [⚡ QUICK-REFERENCE.md](./QUICK-REFERENCE.md)

**快速參考指南**

- 常用指令速查
- TypeScript 型別範例
- Chakra UI 組件語法
- 常用程式碼片段
- 除錯技巧
- 實用工具連結

**適合對象**：需要快速查詢語法的開發者

### [💪 EXERCISES.md](./EXERCISES.md)

**實作練習題目**

- 8 個漸進式練習（簡單到困難）
- 個人簡介卡片、導航列、專案展示等
- 每題包含目標、需求、提示、檢查清單
- 最終專案：完整的個人作品集網站
- 延伸挑戰題

**適合對象**：想要實際動手練習的學生

---

## 快速開始

### 對於學生

1. 📖 先閱讀 [TUTORIAL.md](./TUTORIAL.md) 了解如何從零建立專案
2. ⚡ 開發時使用 [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) 查詢語法
3. 💪 完成 [EXERCISES.md](./EXERCISES.md) 中的練習題
4. 🚀 建立你的個人作品集專案

### 對於教師

1. 📋 參考 [COURSE-OUTLINE.md](./COURSE-OUTLINE.md) 規劃課程
2. 📖 使用 [TUTORIAL.md](./TUTORIAL.md) 作為教學內容
3. 💪 指派 [EXERCISES.md](./EXERCISES.md) 作為課堂練習和作業
4. ⚡ 提供 [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) 給學生參考

## 學習資源

- [Next.js 文檔](https://nextjs.org/docs) - 學習 Next.js 功能和 API
- [Chakra UI 文檔](https://www.chakra-ui.com/docs) - 學習 Chakra UI 組件和主題系統
- [TypeScript 手冊](https://www.typescriptlang.org/docs/) - 學習 TypeScript
- [Emotion 文檔](https://emotion.sh/docs/introduction) - 學習 CSS-in-JS 樣式處理

## 部署

最簡單的部署方式是使用 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

查看 [Next.js 部署文檔](https://nextjs.org/docs/pages/building-your-application/deploying) 了解更多詳情。
