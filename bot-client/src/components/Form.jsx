import { useState } from "react";
import { useRageContext } from "../context/RageContext";
import useDebounce from "../hooks/useDebounce";

export default function Form() {
  const rage = useRageContext();

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const textInputArea = {
    width: "400px",
    height: "50px",
    display: "flex",
    alignItems: "center"
  }
  const textInput = {
    padding: "2%",
    width: "85%",
    height: "60%"
  }
  const button = {
    width: "15%",
    height: "60%",
    background: "lightgray"
  }

  return (
    <form style={textInputArea}>
      {rage === 100 && <button>제압하기</button>}
      {rage < 100 && (
        <>
          <input
            style={textInput}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            placeholder="할 말을 입력하세요.."
          />
          <button type="submit" style={button}>입력</button>
        </>
      )}
    </form>
  );
}
