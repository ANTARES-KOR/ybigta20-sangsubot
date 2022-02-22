import { useState } from "react";
import { useRageContext } from "../context/RageContext";
import useDebounce from "../hooks/useDebounce";

export default function Form() {
  const rage = useRageContext();

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <form>
      {rage === 100 && <button>제압하기</button>}
      {rage < 100 && (
        <>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            placeholder="할 말을 입력하세요.."
          />
          <button type="submit">입력</button>
        </>
      )}
    </form>
  );
}
