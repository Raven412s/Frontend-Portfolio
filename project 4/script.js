function cursorEffect(){
    let page1Content = document.querySelector(".page1-content");
let cursor = document.querySelector("#customCursor");

page1Content.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
  });
});
page1Content.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()