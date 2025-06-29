"use client";

import { initialize, build } from "@/features/code-builder/code-builder";
import { useEffect, useState } from "react";
import styles from "./code-preview.module.css";

function CodePreview({ code }: { code: string }) {
  const [generated, setGenerated] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    initialize().then(() => setInitialized(true));
  }, []);

  useEffect(() => {
    if (!initialized) return;

    build(code).then((result) => {
      if (result.errors.length) return;

      if (result?.outputFiles && result?.outputFiles[0]?.text) {
        setGenerated(result.outputFiles[0].text);
      }
    });
  }, [code, initialized]);

  return (
    <div className={styles.container}>
      <iframe
        srcDoc={`
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <style>
                html, body {
                  margin: 0;
                  padding: 0;
                  width: 100%;
                  height: 100%;
                }

                body {
                  background-color: #ffffff;
                }
              </style>
            </head>
            <body>
              <div id="root"></div>
              <script>
                ${generated}
              </script>
            </body>
          </html>
        `}
        sandbox="allow-scripts"
        className={styles.result}
      />
    </div>
  );
}

export { CodePreview };
