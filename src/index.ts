import "./main.css";
let data;
import("./data.json")
.then(fileData => {
    data = fileData.default;
    console.log(data);
});

type ElemOrNull = Element | null;

function changePage(oldPage: ElemOrNull) {
    if (currentPage === oldPage || oldPage === null) {
        return;
    }
    currentPage?.classList.add("pageDisNone");
    currentPage?.classList.remove("pageDisFlex");
    currentPage = oldPage;
    currentPage?.classList.remove("pageDisNone");
    currentPage?.classList.add("pageDisFlex");
}

const startPageSwitch: ElemOrNull = document.querySelector(".startPageSwitch");
const toyPageSwitch: ElemOrNull = document.querySelector(".toyPageSwitch");
const treePageSwitch: ElemOrNull = document.querySelector(".treePageSwitch");
const startPage: ElemOrNull = document.querySelector(".startPage");
const toyPage: ElemOrNull = document.querySelector(".toyPage");
const treePage: ElemOrNull = document.querySelector(".treePage");
let currentPage: ElemOrNull = startPage;

startPageSwitch?.addEventListener("click", function() {changePage(startPage);});
toyPageSwitch?.addEventListener("click", function() {changePage(toyPage);});
treePageSwitch?.addEventListener("click", function() {changePage(treePage);});

const startPageButton = document.querySelector(".startPageButton");
startPageButton?.addEventListener("click", function() {changePage(toyPage);});