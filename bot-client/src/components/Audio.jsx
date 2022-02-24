import { useRageContext } from "../context/RageContext";

export default function PlayAudio() {

    const rage = useRageContext();
    const banmal = 1; /*반말 하는게 1이라고 가정*/

    var audio1 = new Audio("./audio/정상수 - counting star 원본.flac");
    var audio2 = new Audio("./audio/정상수 - counting star 완벽.flac");
    var audio3 = new Audio("./audio/정상수 반말하지마라니.flac");

    function music(){
        if (rage===100 && banmal===1){
            return audio1.play();
        }
        else if (rage===100 && banmal===0){
            return audio2.play();
        }
        else if (banmal===1){
            return audio3.play();
        }
    }

    return (
        <>
        <button id="btn" onClick={music()}>상수행님 말씀하신다</button>
        </>
    )
    

}