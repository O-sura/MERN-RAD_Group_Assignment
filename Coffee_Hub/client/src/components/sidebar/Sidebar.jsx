import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img className="sideImage"
          src="https://images.pexels.com/photos/302890/pexels-photo-302890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
        The Coffee Hub is one of the oldest coffee houses in Sri Lanka. Java is well known for emphasizing on serving quality coffee all the time. We currently have around 5 branches and is growing rapidly.
        </p>
      </div>
    </div>
  );
}
