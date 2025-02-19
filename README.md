# -Hexschool-2024-React-homework-w7

【六角學院】2024 React 直播冬季班 第七週作業 - Redux 與 Redux Toolkit

## 目標：完成通知功能

這次講解會以第四週作業為起點，加入通知功能

有路由的情況下，要記得將吐司放在 layout，這樣子在每個頁面才會正常顯示

<br>

## 安裝 Redux toolkit 及 react-redux

```bash
npm i @reduxjs/toolkit react-redux
```

<br>

## 建立吐司元件

模板

```jsx
<div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1000 }}>
  <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header bg-success text-white">
      <strong className="me-auto">成功</strong>
      <button type="button" className="btn-close" aria-label="Close"></button>
    </div>
    <div className="toast-body">已更新產品</div>
  </div>
</div>
```

<br>

## 建立 slice

1. 在 /src/redux 下新增 slices 資料夾（可略過直接在 redux 資料夾下新增檔案）
2. 新增 slice 檔案
3. 匯出 slice.reducer

初始狀態可以設成：

```jsx
const initialState = { messages: [] };
```

每個 message 是一個物件，預計會長成：

```jsx
{
  id,
  text,
  status: 'success' || 'failed'
}
```

測試資料：

```jsx
const initialState = {
  messages: [
    {
      id: Date.now(),
      text: "hello",
      status: "success",
    },
  ],
};
```

<br>

## 建立 store

1. 在 /src 下新增 redux 資料夾
2. 新增 store.js 檔案
3. 匯入 slice
4. 透過 configureStore 設定 reducer
5. 匯出 store

<br>

## 使用 store

1. 在 main.jsx 下 import Provider
2. 匯入 store 作為 Provider 的 props 傳入

<br>

## 透過 slice 內的狀態、方法控制吐司的訊息及開關

1. 取得 slice 中的 messages
2. 調整 Toast 元件，使用 messages 渲染資料以及 className
