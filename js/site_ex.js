// console.log("로드완료");
// 글자변경============
const title = document.querySelector(".title");
const textBtn = document.querySelector(".text-btn");
textBtn.addEventListener("click", function () {
    // console.log("click");
    // title.innerText = "반갑습니다!"
    title.classList.toggle("active");
    // 조건문
    // console.log(title.classList.contains("active")); //true

    if (title.classList.contains("active")) {
        title.innerText = "반갑습니다!";
    } else {
        title.innerText = "안녕하세요!";
    }
});
// 예제 2
const moveBtn = document.querySelector(".move-btn");
const box = document.querySelector(".box");
console.log(box);

moveBtn.addEventListener("click", function () {
    box.classList.toggle("move");
});
// 다크모드
const sectionWrap = document.querySelectorAll("section");
console.log(sectionWrap);
const btns = document.querySelectorAll("button");
console.log(btns);
const sectionTitle = document.querySelectorAll("h2");
console.log(sectionTitle);

const darkBtn = document.querySelector(".dark-btn");
darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    // section 하나씩 꺼낸다
    sectionWrap.forEach(function (section) {
        console.log(section);
        section.classList.toggle("dark");
    });
    //    button 하나씩 꺼낸다
    btns.forEach(function (btn) {
        console.log(btn);
        btn.classList.toggle("dark");
    });
    // h2 하나씩 꺼낸다.
    sectionTitle.forEach(function (h) {
        console.log(h);
        h.classList.toggle("dark");
    });
});
// 예제 4
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
});
// 예제 5 모달창
const modalOpen = document.querySelector(".modal-open");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
modalOpen.addEventListener("click", function () {
    // modal.style.display = "block";
    modal.classList.add("on");
});
// 모달 닫기 클릭시
modalClose.addEventListener("click", function () {
    // modal.style.display = none;
    modal.classList.remove("on");
});
