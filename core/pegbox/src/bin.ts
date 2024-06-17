#!/usr/bin/env node

import * as path from 'path';
import * as ts from 'typescript';
import type { BaseConfig } from './components/base-config';

const config = './pegbox.conf';
const outDir = path.resolve(process.cwd(), '.cache', 'pegbox.conf');
const file = path.resolve(process.cwd(), `${config}.ts`);
const modulePath = path.resolve(outDir, `${config}.js`);

// TS Conifgouration
const compilerOptions = {
  module: ts.ModuleKind.CommonJS,
  "allowJs": true,
  "checkJs": true,
  "strict": true,
  "noImplicitReturns": true,
  "noImplicitAny": true,
  "noUnusedLocals": true,
  "strictPropertyInitialization": true,
  // skipLibCheck: true,
};

function compile() {
  const compilerHost = ts.createCompilerHost(compilerOptions);

  // compilerHost
  const program = ts.createProgram(
    [file],
    compilerOptions,
    compilerHost,

  );

  // Oшибки, обнаруженные на этапе создания программы.
  const message = ts.formatDiagnosticsWithColorAndContext(
    ts.getPreEmitDiagnostics(program),
    // format output
    {
      getCanonicalFileName: (path: string) => path,
      getCurrentDirectory: ts.sys.getCurrentDirectory,
      getNewLine: () => ts.sys.newLine,
    },
  );

  program.emit();
  return message
}

(async() => {
  // compiler 
  const msg = compile();
  if (msg) {
    console.log(msg);
    process.exit(1);
  }

  // require result config
  const base = require(modulePath).default as BaseConfig;

  if (!base) {
    console.log('default export must retrun defineConfig(...)');
    process.exit(1);
  }

  await base.run();
})();
