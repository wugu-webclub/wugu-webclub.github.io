# 部落格內容管理

此資料夾用於管理部落格內容，**請在此編輯 YAML 檔案來新增/修改內容**，與其他專案統一。

## 資料夾結構

```
content/
  diaries/      # 日記資料夾
    *.yaml      # 每個 YAML 檔案對應一篇日記
  notes/        # 筆記資料夾
    *.yaml      # 每個 YAML 檔案對應一篇筆記
  gallery/      # 圖畫資料夾
    index.yaml  # 單一 YAML 檔案包含所有圖畫
  videos/       # 影片資料夾
    index.yaml  # 單一 YAML 檔案包含所有影片
```

## 日記格式

在 `content/diaries/` 資料夾中，每個 YAML 檔案對應一篇日記。檔案名稱（不含副檔名）會成為該日記的 URL slug。

```yaml
title: 標題
date: "YYYY-MM-DD"
tags:
  - 標籤1
  - 標籤2
content: |
  # 可使用 Markdown 語法撰寫
  內容...
```

## 筆記格式

在 `content/notes/` 資料夾中，每個 YAML 檔案對應一篇筆記。檔案名稱（不含副檔名）會成為該筆記的 URL slug。

```yaml
title: 標題
category: 分類（選填）
content: |
  # 可使用 Markdown 語法撰寫
  內容...
```

## 圖畫格式

`content/gallery/index.yaml` 單一檔案，點列式：

```yaml
items:
  - path: 相對路徑或 URL
    title: 標題
    description: 描述（選填）
```

## 影片格式

`content/videos/index.yaml` 單一檔案，點列式：

```yaml
items:
  - url: 影片 URL
    title: 標題
    thumbnailUrl: 縮圖 URL（選填）
    description: 描述（選填）
```

## 建置說明

執行 `pnpm run build` 或 `pnpm run dev` 時會自動執行 `content:generate`，將 content 資料夾的 YAML 轉換為 JSON 供網站使用。
