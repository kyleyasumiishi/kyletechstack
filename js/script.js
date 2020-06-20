const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
            // content.style.width = "inherit";
        }
    });
}

let isExpanded = false;
const expandCollapse = document.getElementById("expandCollapse")
expandCollapse.addEventListener("click", function() {
    let content = document.getElementsByClassName("content");
    if (isExpanded) {
        for (let i = 0; i < content.length; i++) {
            content[i].style.display = "none";
        }
        isExpanded = false;
    } else {
        for (let i = 0; i < content.length; i++) {
            content[i].style.display = "block";
        }
        isExpanded = true;
    }
});
