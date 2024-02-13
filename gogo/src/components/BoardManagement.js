import CommonTable from "./table/CommonTable";
import CommonTableRow from "./table/CommonTableRow";
import CommonTableColumn from "./table/CommonTableColumn";
import { getDatas, deleteDatas } from "../api/firebase";
import { useEffect, useState } from "react";
import styles from "./BoardModal.module.css";
import BoardModal from "./BoardModal.js";
import MyPageButton from "./MyPageButton";

const LIMIT = 5;
function BoardManagement() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [lq, setLq] = useState({});
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (docId, imgUrl) => {
    // db에서 데이터 삭제
    const result = await deleteDatas("post", docId, imgUrl);

    // db에서 삭제가 성공했을 때만 그 결과를 화면에 반영한다.
    if (!result) {
      alert("저장된 이미지 파일이 없습니다. \n경로를 확인해주세요.");
      return;
    }

    // Items 셋팅
    setItems((prevItems) => prevItems.filter((item) => item.docId !== docId));
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getDatas("post", options);
    } catch (error) {
      console.error(error);
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }

    const { reviews, lastQuery } = result;
    if (options.lq === undefined) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setLq(lastQuery);
  };

  useEffect(() => {
    handleLoad({ order, lq: undefined, limit: LIMIT });
  }, [order]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (BoardManagement) => {
    setSelectedReservation(BoardManagement);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.boxbox}>
      <div>
        <h1 className={styles.headhead}>작성한글</h1>

        <CommonTable headersName={["", "번호", "제목", "펫이름", "예약일자"]}>
          {items.map((item) => (
            <CommonTableRow>
              <CommonTableColumn>
                <input type="checkbox" />
              </CommonTableColumn>
              <CommonTableColumn>{item.updatedAt}</CommonTableColumn>
              <CommonTableColumn key={item.id}>
                <button onClick={() => openModal(item)}>{item.title}</button>
              </CommonTableColumn>
              <CommonTableColumn>강강이</CommonTableColumn>
              <CommonTableColumn>오늘날짜</CommonTableColumn>
            </CommonTableRow>
          ))}
          {isModalOpen && (
            <BoardModal
              isOpen={isModalOpen}
              BoardManagement={selectedReservation}
              onClose={closeModal}
            />
          )}

          <CommonTableRow>
            <CommonTableColumn>
              <input type="checkbox" />
            </CommonTableColumn>
            <CommonTableColumn>02</CommonTableColumn>
            <CommonTableColumn>하기시렁</CommonTableColumn>
            <CommonTableColumn>냥냥이</CommonTableColumn>
            <CommonTableColumn>2024-01-16</CommonTableColumn>
          </CommonTableRow>
        </CommonTable>
        <div className={styles.tnwjdtkrwp}>
          <MyPageButton>삭제</MyPageButton>
        </div>
      </div>
    </div>
  );
}

export default BoardManagement;
