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
3. 透過 messages 建立 Toast 實例，建立完馬上呼叫 show() 開啟吐司

<br>

## 在 API 回傳後透過 slice 設定的 action 新增吐司訊息（通知使用者結果）

前置作業：

- 在 slice 設定 reducers，並將 actions 解構後匯出
  1. pushMessage
     1. 可以透過 Date.now() 作為 id

1. 匯入 action 及 useDispatch
2. 在通知使用者的地方透過 dispatch action 完成通知

<br>

## 刪除舊的吐司訊息

1. 設定 2 秒後刪除（需撰寫刪除方法與按鈕共用）

- 在 slice 設定 reducers，並將 actions 解構後匯出
  1. removeMessage
     1. 拿到 message id 後，直接透過 splice 刪除

<br>

## 登出功能

1. 戳[登出 API](https://hexschool.github.io/ec-courses-api-swaggerDoc/#/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89/post_v2_logout)
2. 有用 react router 的話就用 navigate 將使用者導到登入頁。沒有的話則將 setIsAuth 設為 false 即可

登出按鈕模板

```jsx
<div className="row mb-3">
  <div className="justify-content-end">
    <button type="button" className="btn btn-secondary">
      登出
    </button>
  </div>
</div>
```
