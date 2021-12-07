This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 追加したい機能

- webpush 機能
- カレンダー機能

### 実現したいこと（vision 的なこと）

- 将来的に Google Calendar と連携
- 今会議かどうかだけをわかれば良い
- 最初は google だけでも
- 会議がない場合のレイアウト作成
  </br>

- まずはこのアプリ内で予定を管理する ← 将来的に実装の可能性あり
  </br>
  </br>

# ライブラリ候補

## カレンダー

- react-calendar
- FullCalendar（今回採用）

## form

- react-hook-form（今回採用予定）
- react-final-form

</br>
</br>

# Git 運用ルール

- gitmoji を利用
- gitmoji を利用しない場合は add, modify, fix などのタグをつける

# type か interface か

正直どちらか良いか分からない。
が、以下の記事を見る限りは type が良い？
当プロダクトではいったんあまり気にせず interface を使う。
https://zenn.dev/luvmini511/articles/6c6f69481c2d17

# src/components/styles（必要ない可能性あり）

このディレクトリには共通して利用する style を定義する

# 2021 年 12 月 7 日気づいたこと

フォルダ名を大文字から小文字にする（逆も然り）だけの修正だと git が検知してくれない
