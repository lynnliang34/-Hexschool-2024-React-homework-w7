export default function Toast() {
  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1000 }}>
      {/* 預設關閉，className 加 show 才會開啟*/}
      <div
        className="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header bg-success text-white">
          <strong className="me-auto">成功</strong>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">已更新產品</div>
      </div>
    </div>
  );
}
