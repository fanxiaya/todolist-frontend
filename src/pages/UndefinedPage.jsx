import "../../assets/main.css";

function UndefinedPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#c53030",
          fontWeight: "bold",
          marginBottom: "2rem",
          letterSpacing: "2px",
          textShadow: "0 2px 8px #feb2b2",
        }}
      >
        该页面不存在
      </h1>
      <button
        className="form-btn"
        style={{ maxWidth: 200 }}
        onClick={() => (window.location.href = "/")}
      >
        返回首页
      </button>
    </div>
  );
}
export default UndefinedPage;
