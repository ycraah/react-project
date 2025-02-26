import "./Header.css";

const Header = () => {
  var options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div className="Header">
      <h3>오늘의 날짜는?</h3>
      <h1>{new Date().toLocaleDateString("ko-KR", options)}</h1>
    </div>
  );
};

export default Header;
