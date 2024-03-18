import { useState } from "react";

export const useThaiLanState = () => {
  const [thaiLan, setThaiLan] = useState(false);
  return { thaiLan, setThaiLan };
};