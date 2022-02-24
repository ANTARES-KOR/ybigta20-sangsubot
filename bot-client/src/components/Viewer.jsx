import { useRageContext } from "../context/RageContext";
import '../main.css';
import 사진1 from './img/사진1.png';
import 사진2 from './img/사진2.png';
import 사진3 from './img/사진3.PNG';
import 사진4 from './img/사진4.png';
import 사진5 from './img/사진5.png';
import 사진6 from './img/사진6.png';

export default function Viewer() {
    /* const rage = useRageContext(); */
    const rage = 90
    /*반말 관련된 contexy api 불러오기 */
    const banmal = 1

    var audio1 = new Audio('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10c6a4dc-b6dd-4d7c-83ec-abd7de6c985c/정상수_반말하지마라니.flac?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220222T125200Z&X-Amz-Expires=86400&X-Amz-Signature=5f49912de0a0612c2601225773dcb6953c08edc6d59e722d23e8c8a1b4395a11&X-Amz-SignedHeaders=host&x-id=GetObject');
    var audio2 = new Audio('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f242bfb6-9a8f-4dc6-94eb-9976373233be/정상수_완벽한_음정으로_커버한_비오_-_Counting_Star.flac?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220222T125200Z&X-Amz-Expires=86400&X-Amz-Signature=d9c1e05d8c27242c70586af88a1ddda99918a6862fdd5c09f164e131d3321d27&X-Amz-SignedHeaders=host&x-id=GetObject');
    var audio3 = new Audio('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8bfe8fd6-582b-4b7f-bf70-1f91953fa8b4/정상수_-_counting_star_원본.flac?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220222T125200Z&X-Amz-Expires=86400&X-Amz-Signature=60a4854468120b89c2ad1aa32028ad2c9677cee2f0d500018e0c0399dea70a49&X-Amz-SignedHeaders=host&x-id=GetObject')

    while (true) {
        if (banmal === 1){
            audio1.play();

            if (rage < 20){
                return <img class="h-300 w-300" src={사진1} />;
            }else if (rage < 40){
                return <img class="h-300 w-300" src={사진2} />;
            }else if (rage < 60){
                return <img class="h-300 w-300" src={사진3} />;
            }else if (rage < 80){
                return <img class="h-300 w-300" src={사진4} />;
            }else if (rage <100){
                return <img class="h-300 w-300" src={사진5} />;
            }else{
                return <img class="h-300 w-300" src={사진6} />;
                audio2.play();
                break;
            }
        }
        else{
            if (rage < 20){
                return <img class="h-300 w-300" src={사진1} />
            }else if (rage < 40){
                return <img class="h-300 w-300" src={사진2} />;
            }else if (rage < 60){
                return <img class="h-300 w-300" src={사진3} />;
            }else if (rage < 80){
                return <img class="h-300 w-300" src={사진4} />;
            }else if (rage <100){
                return <img class="h-300 w-300" src={사진5} />;
            }else{
                return <img class="h-300 w-300" src={사진6} />;
                audio3.play();
                break; 
            }
        }

    }
}
