window.addEventListener("load", () => {
    // console.log("로드완료");
    const pics = document.querySelectorAll(".pic");
    const lightBox = document.querySelector("#lightBox");
    const lightBoxImg = document.querySelector("#lightBox-img");
    const lightBoxTitle = document.querySelector("#lightBox-title");
    const lightBoxDesc = document.querySelector("#lightBox-desc");
    // 이미지 하나씩 꺼낸다.
    // console.log(pics);

    // pics.forEach(function(){});
    // function(){} 일반 함수
    // ()=>{} 화살표 함수
    pics.forEach((pic) => {
        // console.log(pic);
        pic.addEventListener("click", () => {
            console.log(pic.dataset);
            const bigSrc = pic.dataset.src;
            const bigTitle = pic.dataset.title;
            const bigDesc = pic.dataset.desc;
            // console.log(bigSrc);
            // console.log(bigTitle);
            // console.log(bigDesc);

            lightBox.style.display = "flex";
            lightBoxImg.src = bigSrc;
            lightBoxTitle.textContent = bigTitle;
            lightBoxDesc.textContent = bigDesc;
        });
    });
    // 배경클릭시 (lightBox)
    lightBox.addEventListener("click", () => {
        lightBox.style.display = "none";
    });
});
