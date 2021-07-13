var video = document.querySelector("video"); // video 한개만 있을시에 이렇게 불러왔음
var second = 5; // 여기에 초입력
var duration = second * 1000; // 그럼 여기서 알아서 ms 단위로 바꿔줄꺼임

video.addEventListener("playing", (e) => { // video가 play 되었는지 감지
  console.log("playing");
  var it = e.currentTarget; // it 이라는 변수에 video를 담음 이것은 document.querySelector("video") 와 같은 기능을 함.
  console.log(it); // it 을 콘솔에 찍어보았다
  setTimeout(function(){ //setTimeout 함수 사용
    /* 이부분을 사용하면 바로 사라짐 */
    // it.style.display = "none";
    
    /* 이부분을 사용하면 opacity 0될때까지 기다리다 사라짐(transition효과) */
    it.style.transition = "all 1s ease";
    it.style.opacity = "0";
    it.style.visibility = "hidden";

  },duration); // 여기에 duration을 초값을 이용해 몇초후에 없어지는지 컨트롤
});