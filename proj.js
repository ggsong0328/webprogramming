document.addEventListener("DOMContentLoaded", function () {
  // 현재 페이지의 URL 가져오기
  let currentURL = window.location.href;
  console.log(currentURL);

  // 모든 메뉴 아이템에 대해 반복
  document.querySelectorAll(".item").forEach(function (item) {
    // 각 메뉴 아이템의 링크 주소 가져오기
    let link = item.querySelector("a").getAttribute("href");

    // 현재 페이지와 메뉴 아이템의 링크가 일치하는지 확인
    if (currentURL.includes(link)) {
      // 일치하면 해당 메뉴 아이템에 'active' 클래스 추가
      item.classList.add("active");
    }

    let pages = ["1.html", "2.html", "3.html", "4.html", "5.html", "6.html"];

    // 현재 페이지의 경로 가져오기
    let currentPath = window.location.pathname;

    // 현재 페이지의 인덱스 확인
    let currentPageIndex = pages.findIndex((page) =>
      currentPath.endsWith(page)
    );

    // 프로세싱 바 업데이트
    if (currentPageIndex !== -1) {
      let processingBar = document.getElementById("processingBar");
      let percentage = ((currentPageIndex + 1) / pages.length) * 100;

      // 최대 100%로 설정
      percentage = Math.min(percentage, 100);

      // 처리 막대의 너비 업데이트
      processingBar.style.width = percentage + "%";
    }
  });

  document.querySelectorAll(".content").forEach(function (contentDiv) {
    let titleDiv = contentDiv.querySelector(".title");
    let originalText = titleDiv.innerText;
    let originalFontSize = window.getComputedStyle(titleDiv).fontSize; // 원래 글자 크기 저장
    let summaryText = contentDiv.dataset.summary;

    contentDiv.addEventListener("mouseover", function (event) {
      titleDiv.innerText = summaryText;
      titleDiv.style.fontSize = "12px"; // 글자 크기 줄이기
    });

    contentDiv.addEventListener("mouseout", function (event) {
      titleDiv.innerText = originalText;
      titleDiv.style.fontSize = originalFontSize; // 원래 글자 크기로 되돌리기
    });
  });

  document.querySelectorAll(".photo").forEach(function (photoDiv) {
    photoDiv.addEventListener("click", function () {
      // 이미 'zoom' 클래스가 있으면 제거하고, 없으면 추가함.
      this.classList.toggle("zoom");

      // 'zoom' 클래스가 있으면 확대, 없으면 원래 사이즈로
      if (this.classList.contains("zoom")) {
        this.style.transform = "scale(1.2)"; // 확대
      } else {
        this.style.transform = "scale(1)"; // 원래 사이즈로
      }
    });
  });

  document.getElementById("certain").addEventListener("click", function () {
    let pageNumber = prompt(
      "이동하고 싶은 페이지 번호 (1 ~ 6)를 입력해주세요."
    );
    if (pageNumber >= 1 && pageNumber <= 6) {
      window.location.href = pageNumber + ".html";
    } else {
      alert("1 ~ 6 사이의 숫자를 입력해주세요.");
    }
  });
});
