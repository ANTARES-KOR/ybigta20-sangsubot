import { useRageContext } from '../context/RageContext';
import '../main.css';

export default function Gauge() {
    // const rage = useRageContext();
    const rage = 80;
    const gauge_ratio = rage/100;
    const _width = 700- rage/100*700;
    const gauge_bar={
        display: "flex",
        position: "absolute",
        right: "0",
        width: _width,
        height: "50px",
        background: "lightgray",
        transitionDuration: "2s",
    };
    const gauge_frame={
        display: "flex",
        position: "relative",
        width: "700px",
        height: "50px",
        background: "linear-gradient(to right, yellow, red)",
    };
    const text = {
        color: "black",
    }
    const text_frame = {
        display: "flex",
        position: "relative",
        flex_direction: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "700px",
        height: "50px",
    }
    
    return (
        <div style={gauge_frame}>
            <div style={gauge_bar}></div>
            <div style={text_frame}>
                <div style={text}>소노</div>
                <div style={text}>중노</div>
                <div style={text}>대노</div>
                <div style={text}>극대노</div>
                <div style={text}>니머라켓노</div>
            </div>
        </div>
    )
}
