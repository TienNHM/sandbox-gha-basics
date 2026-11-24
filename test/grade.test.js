const test = require("node:test");
const assert = require("node:assert/strict");
const { average, classify } = require("../src/grade.js");

test("average tính đúng điểm trung bình", () => {
  assert.equal(average([8, 9, 10]), 9);
  assert.equal(average([7, 8]), 7.5);
});

test("average báo lỗi khi không có điểm nào", () => {
  assert.throws(() => average([]));
});

test("classify xếp loại đúng", () => {
  assert.equal(classify(8.5), "Giỏi");
  assert.equal(classify(7), "Khá");
  assert.equal(classify(5), "Trung bình");
  assert.equal(classify(4.9), "Yếu");
});
