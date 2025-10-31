# 2025 全端開發課程 - 前端專案

<div align="center">

**整合 Chakra UI 的 Next.js 專案起始模板**

[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-3.28.0-319795?logo=chakra-ui)](https://chakra-ui.com)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev)

[功能特色](#-核心功能) • [快速開始](#-快速開始) • [開發指南](#-開發指南) • [部署](#-部署)

</div>

---

## 📖 專案簡介

這是一個現代化的前端專案，整合了 Next.js、TypeScript 和 Chakra UI，提供完整的開發基礎設施。專案已預先配置好深色模式、自定義主題系統和常用開發工具，讓你可以立即開始建立應用程式。

### ✨ 主要特點

- **🎨 開箱即用的 UI 系統** - Chakra UI v3 完整整合，包含自定義主題配置
- **🌓 深色模式支援** - 使用 next-themes 實作，支援系統主題偵測和持久化
- **🔒 完整型別安全** - 100% TypeScript，所有組件都有完整型別定義
- **⚡ 現代化開發體驗** - 熱重載、路徑別名、ESLint 配置
- **📦 元件化設計** - 可重用的 UI 組件和完善的專案結構

---

## 🛠️ 技術棧

### 核心技術

| 技術            | 版本    | 說明                          |
| --------------- | ------- | ----------------------------- |
| **Next.js**     | 16.0.0  | React 框架，使用 Pages Router |
| **React**       | 19.2.0  | UI 函式庫                     |
| **TypeScript**  | 5.x     | 型別安全的 JavaScript 超集    |
| **Chakra UI**   | 3.28.0  | Component-based UI 框架       |
| **Emotion**     | 11.14.0 | CSS-in-JS 樣式引擎            |
| **next-themes** | 0.4.6   | 深色模式管理                  |
| **react-icons** | 5.5.0   | 圖標庫                        |

### 開發工具

- **ESLint** - 程式碼品質檢查
- **Webpack** - 建置工具（Chakra UI v3 要求）

---

## ✨ 核心功能

### 🎨 Chakra UI 整合

- ✅ 預先配置 ChakraProvider
- ✅ 自定義主題系統（System Config）
- ✅ 可擴展的顏色色票（Color Tokens）
- ✅ Layer Styles 樣式系統
- ✅ 完整的組件庫支援

### 🌓 深色模式

- ✅ 亮色/深色模式無縫切換
- ✅ 使用 next-themes 管理主題
- ✅ LocalStorage 持久化
- ✅ 系統主題偵測
- ✅ 無 Hydration 錯誤

### 📁 專案結構

```
src/
├── pages/                    # Next.js 頁面路由
│   ├── _app.tsx             # 應用程式根組件（全局 Provider）
│   ├── _document.tsx        # HTML 文檔結構
│   └── index.tsx            # 首頁範例
│
├── components/              # React 組件
│   └── ui/                  # Chakra UI 相關組件
│       ├── provider.tsx     # ChakraProvider 配置
│       └── color-mode.tsx   # 深色模式組件和 Hooks
│
├── fixtures/                # 配置和固定資料
│   └── theme/               # Chakra UI 主題配置
│       ├── index.ts         # 主題系統整合
│       ├── colors.ts        # 自定義顏色定義
│       └── layer-styles.ts  # Layer Styles 定義
```

### 🔧 開發特性

- ✅ **路徑別名**：使用 `@/*` 引用 `src/` 目錄
- ✅ **熱重載**：開發時即時更新
- ✅ **型別檢查**：完整的 TypeScript 支援
- ✅ **ESLint**：程式碼品質檢查
- ✅ **Pages Router**：簡單直觀的路由系統

---

## 🚀 快速開始

### 1️⃣ 克隆專案（或使用現有專案）

```bash
git clone <repository-url>
cd 2025-fullstack-course-forntend
```

### 2️⃣ 安裝依賴

```bash
npm install
```

### 3️⃣ 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器前往 [http://localhost:3000](http://localhost:3000) 查看結果。

你應該會看到：

- ☀️/🌙 深色模式切換按鈕
- 一個藍色按鈕（使用自定義色票）

### 4️⃣ 開始開發

修改 `src/pages/index.tsx` 開始建立你的應用！

### 📦 可用指令

```bash
# 開發模式
npm run dev

# 建置專案
npm run build

# 啟動正式伺服器
npm start

# 程式碼檢查
npm run lint
```

---

## 💻 開發指南

### 頁面開發

在 `src/pages/` 目錄下建立 `.tsx` 檔案來新增頁面：

```typescript
// src/pages/about.tsx
import { Box, Container, Heading } from '@chakra-ui/react';

export default function About() {
  return (
    <Container maxW='container.xl' py={8}>
      <Heading>關於頁面</Heading>
      <Box mt={4}>頁面內容...</Box>
    </Container>
  );
}
```

所有頁面自動獲得：

- Chakra UI Provider 功能
- 深色模式支援
- TypeScript 型別檢查
- 路徑別名 `@/*` 引用

### 自定義主題

#### 新增顏色

編輯 `src/fixtures/theme/colors.ts`：

```typescript
const colors = {
  blue: {
    // 現有顏色...
  },
  green: {
    500: { value: '#10b981' },
    600: { value: '#059669' },
  },
};
```

使用：

```typescript
<Button colorPalette='green'>綠色按鈕</Button>
```

#### 新增 Layer Styles

編輯 `src/fixtures/theme/layer-styles.ts`：

```typescript
const layerStyles = defineLayerStyles({
  card: {
    description: '卡片樣式',
    value: {
      padding: '6',
      borderRadius: 'lg',
      boxShadow: 'md',
      bg: 'white',
      _dark: { bg: 'gray.800' },
    },
  },
});
```

使用：

```typescript
<Box layerStyle='card'>卡片內容</Box>
```

### 建立組件

在 `src/components/` 目錄下建立可重用組件：

```typescript
// src/components/Card.tsx
import { Box, BoxProps } from '@chakra-ui/react';

interface CardProps extends BoxProps {
  title: string;
}

export function Card({ title, children, ...rest }: CardProps) {
  return (
    <Box layerStyle='card' {...rest}>
      <h3>{title}</h3>
      {children}
    </Box>
  );
}
```

### 使用深色模式

```typescript
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode';

function MyComponent() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bg}>
      <Button onClick={toggleColorMode}>
        切換至 {colorMode === 'light' ? '深色' : '淺色'} 模式
      </Button>
    </Box>
  );
}
```

---

## 📚 參考資源

本專案包含詳細的教學文件，可查閱：

- **TUTORIAL.md** - 完整的從零建立教學
- **QUICK-REFERENCE.md** - 常用語法速查表
- **EXERCISES.md** - 實作練習題目

### 官方文檔

- [Next.js 文檔](https://nextjs.org/docs) - Next.js 功能和 API
- [Chakra UI 文檔](https://www.chakra-ui.com/docs) - Chakra UI 組件庫
- [TypeScript 手冊](https://www.typescriptlang.org/docs/) - TypeScript 語法
- [React 文檔](https://react.dev/) - React 核心概念

---

## 🚀 部署

### Vercel（推薦）

最簡單的部署方式是使用 [Vercel Platform](https://vercel.com/new)：

1. 將專案推送到 GitHub
2. 在 Vercel 中匯入專案
3. Vercel 會自動偵測 Next.js 並設定建置配置
4. 點擊 Deploy

### 其他平台

- **Netlify** - 支援 Next.js，需要配置建置設定
- **AWS Amplify** - 完整的雲端部署方案
- **Docker** - 使用容器化部署

查看 [Next.js 部署文檔](https://nextjs.org/docs/pages/building-your-application/deploying) 了解更多詳情。

---

## 🤝 貢獻

歡迎提出問題和改進建議！如果你發現任何問題或有新的功能想法：

1. Fork 本專案
2. 建立新的分支（`git checkout -b feature/amazing-feature`）
3. 提交變更（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 開啟 Pull Request

---

## 📝 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案

---

## 💬 聯絡

如有任何問題或建議，歡迎透過以下方式聯繫：

- 建立 [Issue](../../issues)
- 提交 [Pull Request](../../pulls)

---

**Happy Coding! 🎉**
