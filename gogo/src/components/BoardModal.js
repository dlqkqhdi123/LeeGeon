import React, { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./BoardModal.module.css";
import {
  collection,
  db,
  doc,
  getDocs,
  updateDoc,
  uploadImages,
} from "../api/firebase";
import iconClose from "../assets/icon/icon-close_ff9b50.png";
import chevronLeftIcon from "../assets/icon/chevron_left_ff9b50.png";
import chevronRightIcon from "../assets/icon/chevron_right_ff9b50.png";

function BoardModal({
  isOpen,
  onClose,
  onSendData,
  userData,
  BoardManagement,
}) {
  const [images, setImages] = useState([]);
  const [showChevron, setShowChevron] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState(null);
  const [postData, setPostData] = useState([]);

  const fetchPostData = async () => {
    try {
      const postCollection = collection(db, "post");
      const postSnapshot = await getDocs(postCollection);
      if (!postSnapshot.empty) {
        const postData = postSnapshot.docs.map((doc) => doc.data());
        setPostData(postData);
        setItems(postData); // items 업데이트
        setCurrentIndex(0);
      } else {
        console.log("해당하는 게시물이 없습니다.");
      }
    } catch (error) {
      console.error("게시물 정보를 불러오는 중 오류가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    e.stopPropagation();

    if (isOpen) {
      // 원하는 동작을 추가하세요.
    }
  };

  const handleImageChange = (e) => {
    const fileInput = e.target;
    const selectedImages = Array.from(fileInput.files);

    if (selectedImages.length > 0) {
      setImages((prevImages) => {
        const newImages = [...prevImages, ...selectedImages];
        setCurrentIndex(0);

        const newShowChevron = newImages.length > 1;
        setShowChevron(newShowChevron);

        return newImages;
      });
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSendData = async () => {
    if (isOpen) {
      try {
        const imageUrls = await uploadImages(images);

        const updatedData = {
          title: items[currentIndex].title,
          content: items[currentIndex].content,
          images: imageUrls,
          userData: userData,
        };

        const postDocRef = doc(db, "post", items[currentIndex].id);
        await updateDoc(postDocRef, updatedData);

        console.log("데이터 수정 완료");
        onSendData(updatedData);
        onClose();
      } catch (error) {
        console.error("이미지 업로드 중 오류가 발생했습니다.", error);
      }
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            <span className={styles.modalSpan}>글쓰기</span>
            <img
              className={styles.closeImg}
              src={iconClose}
              alt="close-icon"
              onClick={onClose}
            />
          </div>
          <div className={styles.modalContent}>
            <div className={styles.modalImgBox}>
              <figure id="imageFigure">
                {/* {items && Array.isArray(items) && items.length > 0 && (
                  <>
                    <div className={styles.imageIndicators}>
                      {items && Array.isArray(items) && items.length > 0 && (
                        <div>
                          <h2>{postData[currentIndex].title}</h2>
                          <p>{postData[currentIndex].content}</p>
                        </div>
                      )}
                    </div>

                    {showChevron && (
                      <>
                        <div
                          className={styles.modalChevron}
                          onClick={handlePrevClick}
                        >
                          <img src={chevronLeftIcon} alt="left-chevron" />
                        </div>
                        <div
                          className={styles.modalChevron}
                          onClick={handleNextClick}
                        >
                          <img src={chevronRightIcon} alt="right-chevron" />
                        </div>
                      </>
                    )}
                  </>
                )} */}
              </figure>
              <input
                type="file"
                id="imageInput"
                style={{ display: "none" }}
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </div>
            <div className={styles.modalContentBox}>
              <div className={styles.modalContentTitle}>
                {items && Array.isArray(items) && items.length > 0 && (
                  <div>
                    <h2>{items[currentIndex].title}</h2>
                    <p>{items[currentIndex].content}</p>
                  </div>
                )}
              </div>
              <Button onClick={handleSendData}>수정</Button>{" "}
              {/* 수정 버튼 추가 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardModal;
