let btnEl=document.getElementById("btn")
let bodyEl=document.querySelector("body")
btnEl.addEventListener("click",function(){
  const divvideoEL=document.createElement("div")
  divvideoEL.classList.add("divvideo")
    bodyEl.append(divvideoEL)
    const videoEl=document.createElement("video")
    videoEl.src =
    'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';
  
  videoEl.poster =
    'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217';
  videoEl.autoplay = false;
  videoEl.controls = true;
  videoEl.muted = false;
  videoEl.classList.add("video")
bodyEl.append(videoEl)
})
