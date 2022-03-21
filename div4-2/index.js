const now = new Date();
const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
const today = `${now.getFullYear()}년 ${
  now.getMonth() + 1
}월 ${now.getDate()}일 ${dayOfWeek[now.getDay()]}요일 `;
document.querySelector("h4").innerText = today;
// Random Numbers
const wrapper = document.querySelector(".wrapper");
for (let i = 1; i <= 120; i += 6) {
  wrapper.innerHTML += `
<div class="underImg">
<p class="leftNumber">
  <span class="num${i}"></span>
  <span class="num${i + 1}"></span>
</p>
<p class="rightNumber">
  <span class="num${i + 2}"></span>
  <span class="num${i + 3}"></span>
  <span class="num${i + 4}"></span>
  <span class="num${i + 5}"></span>
</p>
</div>
`;
}

for (let i = 1; i <= 120; i++) {
  const random = Math.floor(Math.random() * 9) + 1;
  document.querySelector(`.num${i}`).innerText = random;
}
