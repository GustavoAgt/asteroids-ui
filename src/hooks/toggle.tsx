import { useCallback, useState } from "react";

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle] as const;
};

export default useToggle;
