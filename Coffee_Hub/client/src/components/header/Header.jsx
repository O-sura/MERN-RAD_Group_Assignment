import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">THE</span>
        <span className="headerTitleLg">Coffee Hub</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2015/09/01/21/00/coffee-beans-917613_960_720.jpg"
        alt=""
      />
    </div>
  );
}
