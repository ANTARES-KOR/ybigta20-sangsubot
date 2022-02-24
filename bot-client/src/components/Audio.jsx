import { useCallback } from "react";
import { useRageContext } from "../context/RageContext";

// 얘네같은경우에는 static하기때문에 function 안에다가 정의하기보다는 function 바깥에 정의해놓는게 좋음.
// function 내부에 정의했을경우 PlayAudio component가 render 될 때 마다 새로운 객체가 생성되기 때문에 실행속도가 느려짐.
const audio1 = new Audio("./audio/정상수 - counting star 원본.flac");
const audio2 = new Audio("./audio/정상수 - counting star 완벽.flac");
const audio3 = new Audio("./audio/정상수 반말하지마라니.flac");

export default function PlayAudio() {
  const rage = useRageContext();
  const banmal = 1; /*반말 하는게 1이라고 가정*/

  /*
  function music() {
    if (rage === 100 && banmal === 1) {
      return audio1.play();
    } else if (rage === 100 && banmal === 0) {
      return audio2.play();
    } else if (banmal === 1) {
      return audio3.play();
    }
  }
  */

  // playmusic 과 같은 함수의 경우 함수 rage라는 state에 따라서 함수의 실행 내용이 달라지기 때문에 함수 내부에 정의해줘야 함.
  // 하지만 rage가 바뀔때만 새로 만들어지면 되는거라서 useCallback hook을 이용해서 메모이제이션해준다!
  // https://ko.reactjs.org/docs/hooks-reference.html#usecallback
  const playMusic = useCallback(() => {
    if (rage === 100 && banmal === 1) {
      return audio1.play();
    } else if (rage === 100 && banmal === 0) {
      return audio2.play();
    } else if (banmal === 1) {
      return audio3.play();
    }
  }, [rage]);

  // onClick에 함수넣는거는 인터넷에 찾아보도록..!
  // onClick 안에 들어갈 애는 onClick이라는 event에 대해서 실행할 함수가 들어가야하는데
  // onClick = {play()} 이렇게 넣으면 함수를 넣는게 아니라 함수의 실행결과? 를 넣는거가된달까? 여튼 그러함 설명하기 어려운데 찾아보셈.
  // https://ko.reactjs.org/docs/faq-functions.html
  return (
    <>
      <button id="btn" onClick={playMusic}>
        상수행님 말씀하신다
      </button>
    </>
  );
}
