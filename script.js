const tags = document.querySelector(".tags");
const textarea = document.querySelector("#textarea");

textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createChoiceTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    SelectRandomTag();
  }
});
function createChoiceTags(input) {
  const newTags = input
    .split(",") //convert to array
    .filter((arrayOfTags) => arrayOfTags.trim() !== "")
    .map((arrayOfTags) => arrayOfTags.trim());
  tags.innerHTML = "";
  newTags.forEach((element) => {
    const tagging = document.createElement("span");
    tagging.classList.add("tag");
    tagging.innerText = element;
    tags.appendChild(tagging);
  });
}
function SelectRandomTag() {
  const times = 60;
  const tagsInArray = document.querySelectorAll(".tag");

  if (tagsInArray.length > 0) {
    const interval = setInterval(() => {
      const randomTag = PickRandomTag();
      activeTag(randomTag);
      setTimeout(() => {
        inActiveTag(randomTag);
      }, 100);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        const picktag = PickRandomTag();
        activeTag(picktag);
      }, 50);
    }, times * 100);
  } else {
    // If there are no tags available, do something else
    console.log("No tags available");
  }
}
function PickRandomTag() {
  const tagsInArray = document.querySelectorAll(".tag");
  return tagsInArray[Math.floor(Math.random() * tagsInArray.length)];
}

function activeTag(tag) {
  tag.classList.add("active");
}
function inActiveTag(tag) {
  tag.classList.remove("active");
}
