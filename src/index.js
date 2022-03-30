import "./styles.css";

const ratingClickHandler = (e, list) => {
  const rating = e.target.id;
  const listElements = list.querySelectorAll("li");
  for (let i = 0; i < listElements.length; i++) {
    const listElement = listElements[i];
    const node = listElement.firstChild;
    if (node.id <= rating) {
      listElement.classList.add("active");
    } else {
      listElement.classList.remove("active");
    }
  }
  return ~~rating + 1;
};

const setRating = (rating) => {
  document.getElementById("rating").innerText = rating;
};

(function generateRatingSystem(scale, container, symbolCode = "&starf;") {
  const ratingList = document.createElement("ul");
  ratingList.classList.add("rating-container");
  ratingList.id = "rating-system";
  for (let i = 0; i < scale; i++) {
    const listNode = document.createElement("li");
    const ratingNode = document.createElement("a");

    ratingNode.innerHTML = symbolCode;
    ratingNode.id = i;

    ratingNode.addEventListener("click", (e) =>
      setRating(ratingClickHandler(e, ratingList))
    );
    listNode.appendChild(ratingNode);
    ratingList.appendChild(listNode);
  }
  container.appendChild(ratingList);
})(5, document.getElementsByClassName("container")[0]);
