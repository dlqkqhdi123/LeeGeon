import React, { useState } from "react";
import Button from "./Button";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  const [images, setImages] = useState([]);
  const [showChevron, setShowChevron] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handleAddImageClick = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleImageChange = (e) => {
    const fileInput = e.target;
    const selectedImages = Array.from(fileInput.files);

    if (selectedImages.length > 0) {
      setImages((prevImages) => [...prevImages, ...selectedImages]);
      setShowChevron(images.length + selectedImages.length > 1);
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-container">
          <div className="modal-header">
            <span className="modal-span">글쓰기</span>
            <img
              className="close-img"
              src="/icon/icon-close.png"
              alt="close-icon"
              onClick={onClose}
            />
          </div>
          <div className="modal-content">
            <div className="modal-imgBox">
              <figure id="imageFigure">
                {images.length > 0 && (
                  <>
                    <div className="image-indicators">
                      {images.map((_, index) => (
                        <div
                          key={index}
                          className={`image-indicator ${
                            currentIndex === index ? "active" : ""
                          }`}
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
                          className="modal-chevron modal-chevron-left"
                          onClick={handlePrevClick}
                        >
                          <img
                            src="/icon/chevron_left_or.png"
                            alt="left-chevron"
                          />
                        </div>
                        <div
                          className="modal-chevron modal-chevron-right"
                          onClick={handleNextClick}
                        >
                          <img
                            src="/icon/chevron_right_or.png"
                            alt="right-chevron"
                          />
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
              <div className="add-img-container" onClick={handleAddImageClick}>
                + 사진등록하기
              </div>
            </div>
            <div className="modal-contentBox">
              <div className="modal-content-title">
                <input
                  className="modal-input"
                  placeholder="제목을 입력하세요"
                />
                <textarea
                  className="modal-input2"
                  placeholder="내용을 입력하세요"
                ></textarea>
              </div>
              <Button children="등록하기" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
