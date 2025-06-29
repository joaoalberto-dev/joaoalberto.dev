"use client";

import { Suspense, useState } from "react";
import { CodeEditor } from "@/features/code-editor/code-editor";
import { CodePreview } from "@/features/code-preview/code-preview";
import { cn } from "@/core/utils/cn";
import styles from "./playground.module.css";

const defaultCode = `
import * as React from 'https://esm.sh/react'
import * as Client from 'https://esm.sh/react-dom/client'

const container = document.querySelector('#root')
const root = Client.createRoot(container)
const Greet = () => <h1>Hello, world!</h1>

root.render(<Greet />)
`;

function Playground() {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className={cn("stack", styles.container)}>
      <CodeEditor code={code} onChange={setCode} />
      <CodePreview code={code} />
    </div>
  );
}

export { Playground };
