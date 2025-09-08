function UndefinedPage() {
  return (
    <>
      <h1>该页面不存在</h1>
      <button onClick={() => (window.location.href = "/")}>返回首页 </button>
    </>
  );
}
export default UndefinedPage;
