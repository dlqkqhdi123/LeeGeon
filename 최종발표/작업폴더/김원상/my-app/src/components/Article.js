import { Link } from "react-router-dom";
import "firebase/storage";
import { LuClipboardEdit } from "react-icons/lu";
import "./Article.css";
import "./ArticleFooter.css";
import "./ArticleNav.css";
import communityDog from "../assets/source/community_dog.gif";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import ArticleListItem from "./ArticleListItem";
import { db, addDatas, getDatas } from "../api/firebase";
import { useMember } from "../contexts/MemberContext";

function Article() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDataList, setModalDataList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const userData = useMember();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await getDatas("articles");
        setModalDataList(
          articles.sort(
            (a, b) => new Date(b.uploadTime) - new Date(a.uploadTime)
          )
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalData = async (data) => {
    data.uploadTime = new Date().toISOString();
    data.userData = userData;

    try {
      const docRef = await addDatas("articles", data);
      const docId = docRef.id;
      data.docId = docId;

      setModalDataList((prevList) =>
        [...prevList, data].sort(
          (a, b) => new Date(b.uploadTime) - new Date(a.uploadTime)
        )
      );

      closeModal();
    } catch (error) {
      // console.error("Error adding document to Firestore:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="main-container">
      <div className="article-container">
        <div className="wrap">
          <div className="article-header">
            <div className="article-header-inner">
              <h1 className="article-title">Community</h1>
              <div className="article-category">
                <ul className="category-lists">
                  <li
                    className={`category-list ${
                      selectedCategory === "All" && "active"
                    }`}
                  >
                    <Link
                      to="/article"
                      className="category-link"
                      onClick={() => handleCategoryClick("All")}
                    >
                      All
                    </Link>
                  </li>
                  <li
                    className={`category-list ${
                      selectedCategory === "나눔/분양" && "active"
                    }`}
                  >
                    <span onClick={() => handleCategoryClick("나눔/분양")}>
                      나눔/분양
                    </span>
                  </li>
                  <li
                    className={`category-list ${
                      selectedCategory === "꿀팁" && "active"
                    }`}
                  >
                    <span onClick={() => handleCategoryClick("꿀팁")}>
                      꿀팁
                    </span>
                  </li>
                  <li
                    className={`category-list ${
                      selectedCategory === "갤러리" && "active"
                    }`}
                  >
                    <span onClick={() => handleCategoryClick("갤러리")}>
                      갤러리
                    </span>
                  </li>
                </ul>
              </div>
              <div className="article-illust">
                <div className="article-illust-img">
                  <figure className="article-img">
                    <img src={communityDog} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="article-body">
            <div className="article-body-inner">
              <div className="write" onClick={openModal}>
                <p className="write-content">글쓰기</p>
                <LuClipboardEdit />
              </div>
              {modalDataList.map((modalData, index) => (
                <ArticleListItem
                  key={index}
                  modalData={modalData}
                  index={index}
                  userData={modalData.userData}
                />
              ))}
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              onSendData={handleModalData}
            />

            <div className="load-more">{/* Link + img + hover  */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Article;
