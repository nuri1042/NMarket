import React, { useState, useCallback } from "react";

export default (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};
