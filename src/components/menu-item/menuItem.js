import "./menuItem.styles.scss";
import { useNavigate } from "react-router-dom";

export default function MenuItem({ title, imageUrl, size, linkUrl }) {

  const navigate = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(linkUrl)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
