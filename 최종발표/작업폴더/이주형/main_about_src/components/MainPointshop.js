import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, collection, getDocs, query, orderBy } from "../api/firebase";
import "./MainPointshop.css";
import CselLeftImg from "../assets/icon/chevron_left_bk.svg";
import CselRightImg from "../assets/icon/chevron_right_bk.svg";

function MainPointshop() {
  const [item, setItem] = useState([]);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
  };

  // const onMouseUp = () => {
  //   setIsDown(false);
  // };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 3;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "MyPagePointCustomer"),
        orderBy("id")
        // limit(4)
      );
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc) => doc.data());
      setItem(items);
    };
    fetchData();
  }, []);

  return (
    <div className="Container">
      <div className="context">
        <h3>Point Shop</h3>
      </div>

      <div className="PointShop">
        <div className="PointShop-arrow-l">
          <img src={CselLeftImg} alt="왼쪽 화살표" />
        </div>
        <div
          className="PointShop-in"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          // onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {item.map((item, index) => (
            <div className="PointShop-item" key={index}>
              <img src={item.images} alt={item.label} />
              <p className="PointShop-item-title">{item.label}</p>
              <p className="PointShop-item-won">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="PointShop-arrow-r">
          <img src={CselRightImg} alt="오른쪽 화살표" />
        </div>
      </div>
      <Link to="/pointshop" className="StyleLink-PointShop">
        {/* 이동경로만 변경해주세요  */}
        <span className="Inner-PointShop">More</span>
      </Link>
    </div>
  );
}
export default MainPointshop;
