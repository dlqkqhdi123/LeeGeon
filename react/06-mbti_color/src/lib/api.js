import mockItems from "../mock.json";

const mock = mockItems;
const LIMITS = 10;

export function getMockItems(lastItemNum) {
  if (lastItemNum === mock.length) return;

  lastItemNum = lastItemNum ? lastItemNum : 0;
  const nextItemNum = lastItemNum + LIMITS;

  //   개수 : 10 10 10 10
  //   인덱스 : 0~9 10~19 20~29 30~39

  return { data: mock.slice(lastItemNum, nextItemNum), nextItemNum };
}

export function getMockItemsByFilter(filter) {
  return { data: mock.filter(({ mbti }) => mbti == filter) };
}
