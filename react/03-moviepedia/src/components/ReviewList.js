import { useContext, useState } from "react";
import "./ReviewList.css";
import ReviewForm from "./ReviewForm";
import { useLocale } from "../contexts/LoclaContext";
import useTranslate from "../hooks/useTranslate";
import Rating from "./Rating";
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  // const locale = useContext(LoacleContext);
  // const locale = useLocale();
  const t = useTranslate();

  const handleDeleteClick = () => onDelete(item.docId, item.imgUrl);
  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={123} />
      <div className="ReviewListItem-rows">
        <h1 className="ReviewListItem-title">{item.title}</h1>
        <Rating className="ReviewListItem-rating" hoverRating={item.rating} />
        <p className="ReviewListItem-date">{formatDate(item.createdAt)}</p>
        <p className="ReviewListItem-content">{item.content}</p>
        {/* <p>현재 언어 : {useLocale}</p> */}
        <div className="ReviewListItem-buttons">
          <button
            className="ReviewListItem-edit-button"
            onClick={handleEditClick}
          >
            {t("edit button")}
          </button>
          <button
            className="ReviewListItem-delete-button"
            onClick={handleDeleteClick}
          >
            {t("delete button")}
          </button>
        </div>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  const [editingId, setEditingId] = useState(null);
  console.log(editingId);
  return (
    <ul className="ReviewList">
      {items.map((item) => {
        if (item.id === editingId) {
          const { title, rating, content, imgUrl, docId } = item;
          const initialValues = { title, rating, content, imgUrl: null };

          const handleCancel = () => setEditingId(null);

          const handleSubmit = (collectionName, formatDate) => {
            const result = onUpdate(collectionName, formatDate, docId, imgUrl);

            if (result === null) {
              alert("리뷰를 수정할 수 없습니다.\n 관리자에게 문의주세요");
              return;
            }
            return result;
          };

          const handleSubmitSuccess = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          };

          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
              />
            </li>
          );
        }

        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
