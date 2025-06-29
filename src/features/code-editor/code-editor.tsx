"use client";

import { useColorMode } from "@/core/hooks/use-color-mode";
import Editor from "@monaco-editor/react";
import ghDark from "monaco-themes/themes/GitHub Dark.json";
import ghLight from "monaco-themes/themes/GitHub Light.json";
import styles from "./code-editor.module.css";

type Props = {
  code: string;
  onChange: (code: string) => void;
};

function CodeEditor({ code, onChange }: Props) {
  const mode = useColorMode();

  const beforeMount = (monaco: typeof import("monaco-editor")) => {
    if (monaco?.editor) {
      monaco.editor.defineTheme("gh-light", {
        ...ghLight,
        base: "vs",
      });

      monaco.editor.defineTheme("gh-dark", {
        ...ghDark,
        base: "vs-dark",
      });
    }
  };

  return (
    <div className={styles.container}>
      <Editor
        theme={mode === "dark" ? "gh-dark" : "gh-light"}
        options={{
          scrollBeyondLastColumn: 0,
          scrollBeyondLastLine: false,
          renderLineHighlight: "none",
          lineHeight: 30,
          padding: {
            top: 20,
            bottom: 20,
          },
          minimap: {
            enabled: false,
          },
        }}
        defaultLanguage="javascript"
        defaultValue={code}
        beforeMount={beforeMount}
        onChange={onChange}
      />
    </div>
  );
}

export { CodeEditor };
