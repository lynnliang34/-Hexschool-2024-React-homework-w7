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
