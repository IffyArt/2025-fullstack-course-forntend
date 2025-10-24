# 2025 全端開發課程 - 前端專案

這是一個基於 [Next.js](https://nextjs.org) 的全端開發課程前端專案，使用 TypeScript 和現代化的 React 開發工具。

## 專案架構

### 技術棧

- **框架**: Next.js 16.0.0 (Pages Router)
- **語言**: TypeScript 5
- **UI 庫**: React 19.2.0
- **狀態管理**: TanStack React Query 5.90.5
- **HTTP 客戶端**: Axios 1.12.2
- **表單處理**: React Hook Form 7.65.0
- **編譯器**: React Compiler (實驗性功能)

### 專案結構

```
src/
├── pages/                 # Next.js 頁面路由
│   ├── _app.tsx          # 應用程式根組件 (包含 React Query Provider)
│   ├── _document.tsx     # HTML 文檔結構
│   └── index.tsx         # 首頁
├── helper/               # 工具函數和配置
│   └── react-query/      # React Query 配置
│       └── index.ts      # QueryClient 設定
└── ...                   # 其他源碼目錄
```

### 核心功能

- **React Query 整合**: 已配置 QueryClient 和 Provider，支援伺服器狀態管理
- **TypeScript 支援**: 完整的型別檢查和路徑別名 (`@/*`)
- **React Compiler**: 啟用實驗性的 React 編譯器優化
- **嚴格模式**: 啟用 React Strict Mode 提升開發體驗

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
- 所有頁面都會自動獲得 React Query 的功能

### API 路由

- 在 `src/pages/api/` 目錄下建立 API 路由
- 檔案會自動對應到 `/api/*` 路徑

### 狀態管理

- 使用 React Query 處理伺服器狀態
- 使用 React Hook Form 處理表單狀態
- 使用 React 內建狀態管理本地狀態

## 專案特色

- **現代化開發體驗**: TypeScript + ESLint + React Compiler
- **高效能**: React Query 快取和背景更新
- **型別安全**: 完整的 TypeScript 支援
- **開發工具**: 熱重載和快速刷新

## 學習資源

- [Next.js 文檔](https://nextjs.org/docs) - 學習 Next.js 功能和 API
- [React Query 文檔](https://tanstack.com/query/latest) - 學習伺服器狀態管理
- [TypeScript 手冊](https://www.typescriptlang.org/docs/) - 學習 TypeScript

## 部署

最簡單的部署方式是使用 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

查看 [Next.js 部署文檔](https://nextjs.org/docs/pages/building-your-application/deploying) 了解更多詳情。
