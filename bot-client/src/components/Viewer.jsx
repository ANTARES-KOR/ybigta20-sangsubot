import { useRageContext } from "../context/RageContext";
import '../main.css';
import 사진1 from './img/사진1.png';
import 사진2 from './img/사진2.png';
import 사진3 from './img/사진3.PNG';
import 사진4 from './img/사진4.png';
import 사진5 from './img/사진5.png';
import 사진6 from './img/사진6.png';

export default function Viewer() {
    const images={
        width: "400px",
        height: "400px",
    };
    const rage = useRageContext();

    if (rage < 20){
        return <img src={사진1} style={images}/>
    }else if (rage < 40){
        return <img src={사진2} style={images}/>;
    }else if (rage < 60){
        return <img src={사진3} style={images}/>;
    }else if (rage < 80){
        return <img src={사진4} style={images}/>;
    }else if (rage <100){
        return <img src={사진5} style={images}/>;
    }else{
        return <img src={사진6} style={images}/>;
    }
}
