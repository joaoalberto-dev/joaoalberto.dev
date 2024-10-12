"use client";

import { useEffect, useState } from "react";

type TypeTextProps = {
  text: string;
};

export default function TypeText({ text }: TypeTextProps) {
  const [typeText, setTypedText] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    function pushLetter() {
      const nextChar = text[typeText.length];
      const delay = nextChar === " " ? 0 : 300;

      timer = setTimeout(() => {
        setTypedText((previous) => previous + nextChar);
      }, delay);
    }

    if (typeText !== text) {
      pushLetter();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [typeText, text]);

  return typeText;
}
