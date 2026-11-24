// Tính điểm trung bình, làm tròn 1 chữ số thập phân
function average(scores) {
  if (scores.length === 0) {
    throw new Error("Cần ít nhất một điểm");
  }
  const total = scores.reduce((sum, s) => sum + s, 0);
  return Math.round((total / scores.length) * 10) / 10;
}

// Xếp loại theo điểm trung bình
function classify(avg) {
  if (avg >= 8) return "Giỏi";
  if (avg >= 6.5) return "Khá";
  if (avg > 5) return "Trung bình";
  return "Yếu";
}

module.exports = { average, classify };
