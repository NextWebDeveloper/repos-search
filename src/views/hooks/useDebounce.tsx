import React, { useState, useEffect } from "react";

const useDebounce = (value: string, timeout: number = 200) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const currentTimeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(currentTimeoutId);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
