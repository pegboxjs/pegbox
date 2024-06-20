#!/usr/bin/env node

import * as path from 'path';
import * as ts from 'typescript';
import yargs from 'yargs';
import * as yarngsHelpers from 'yargs/helpers';
import type { App } from './';

const config = './pegbox.conf';
const outDir = path.resolve(process.cwd(), '.cache', 'pegbox.conf');
const file = path.resolve(process.cwd(), `${config}.ts`);
const modulePath = path.resolve(outDir, `${config}.js`);

// TS Conifgouration
const compilerOptions = {
  outDir,
  module: ts.ModuleKind.CommonJS,
  allowJs: true,
  strict: true,
  noImplicitReturns: true,
  noImplicitAny: true,
  noUnusedLocals: true,
  strictPropertyInitialization: true,
  skipLibCheck: true,
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
  const app = require(modulePath).default as App;
  if (!app) {
    console.log('default export must retrun defineConfig(...)');
    process.exit(1);
  }

  const argv = yargs(yarngsHelpers.hideBin(process.argv))
    .option('watch', {
      alias: 'w',
      type: 'boolean',
      description: 'Run with watch mode'
    })
    .option('build', {
      alias: 'b',
      type: 'boolean',
      description: 'Run with build mode'
    })
    .parse() as Record<string, string|boolean>;

    if (argv.build) {
      return await app.build();
    }

    if (argv.watch) {
      return await app.watch();
    }

    console.log('Have to use --watch or --build arguments');
    process.exit(1);
})();
