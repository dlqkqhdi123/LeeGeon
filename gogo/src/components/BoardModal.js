import React, { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./BoardModal.module.css";
import { collection, db, getDocs, uploadImages } from "../api/firebase";
import iconClose from "../assets/icon/icon-close_ff9b50.png";
import chevronLeftIcon from "../assets/icon/chevron_left_ff9b50.png";
import chevronRightIcon from "../assets/icon/chevron_right_ff9b50.png";

function BoardModal({ isOpen, onClose, onSendData, userData }) {
  const [images, setImages] = useState([]);
  const [showChevron, setShowChevron] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const reservations = await getReservations();
        setItems(reservations);
      } catch (error) {
        console.error("예약 정보를 불러오는 중에 오류가 발생했습니다.", error);
      }
    }

    async function getReservations() {
      const postCol = collection(db, "post");
      const postSnapshot = await getDocs(postCol);
      const postList = postSnapshot.docs.map((doc) => doc.data());
      return postList;
    }

    fetchReservations(); // 컴포넌트가 마운트될 때 fetchReservations 함수를 실행하도록 호출합니다.
  }, []);

  if (!isOpen) return null;

  async function getReservations(db) {
    const postCol = collection(db, "post");
    const postSnapshot = await getDocs(postCol);
    const postList = postSnapshot.docs.map((doc) => doc.data());
    return postList;
  }

  const handleOverlayClick = (e) => {
    e.stopPropagation();

    if (isOpen) {
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

        const data = {
          title,
          content,
          images: imageUrls,
          userData: userData,
        };
        console.log("sendData 호출, userData:", userData);
        onSendData(data);
        onClose();
      } catch (error) {
        console.error("Error uploading images: ", error);
      }
    }
    console.log("handleSendData의 userData", handleSendData);
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div
        className={styles.modal - content}
        onClick={(e) => e.stopPropagation()}
      >
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
                {items.length > 0 && (
                  <>
                    <div className={styles.imageIndicators}>
                      {items.map((post, index) => (
                        <div
                          key={index}
                          className={`image-indicator ${
                            currentIndex === index ? "active" : ""
                          }`}
                          //여기도 다시생각해봐야댐
                        ></div>
                      ))}
                    </div>
                    <img
                      src={URL.createObjectURL(images[currentIndex])}
                      alt={`Selected Image ${currentIndex + 1}`}
                    />
                    {showChevron && (
                      <>
                        <div
                          className={styles.modalChevron}
                          // modal-chevron-left 클레스네임추가 해야함
                          onClick={handlePrevClick}
                        >
                          <img src={chevronLeftIcon} alt="left-chevron" />
                        </div>
                        <div
                          className={styles.modalChevron}
                          // modal-chevron-right 이것도
                          onClick={handleNextClick}
                        >
                          <img src={chevronRightIcon} alt="right-chevron" />
                        </div>
                      </>
                    )}
                  </>
                )}
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
                {items && (
                  <div>
                    <h2>{items.title}</h2>
                    <p>{items.content}</p>
                    {/* Firebase 데이터의 이미지 표시 */}
                    {items.images.map((image, index) => (
                      <img key={index} src={image.url} alt={image.alt} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardModal;
