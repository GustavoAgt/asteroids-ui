import { useEffect } from "react";

export default function useKeyPress(key: string, action: () => void) {
  useEffect(() => {
    function keyPress(e: any) {
      if (e.key === key) {
        action();
      }
    }

    window.addEventListener("keyup", keyPress);

    return () => window.removeEventListener("keyup", keyPress);
  });
}
