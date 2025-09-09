const AboutPage = () => {
  return (
    <div style={{ padding: "8rem" }}>
      <h1>关于Todo List Site</h1>
      <p>
        {
          "简单的待办事项应用,使用React,ReduxToolkit,material ui和React-router构建"
        }
      </p>
      <p>{"api请求来自于个人后端项目,使用Node.js构建"}</p>
      <a href="https://github.com/fanxiaya/todolist-main">项目源码地址</a>
      <p>{"软件工程2407班樊思睿"}</p>
    </div>
  );
};

export default AboutPage;
