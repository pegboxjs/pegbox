import React from 'react';
import express, { Request, Response } from 'express';
import ejs from 'ejs';

// special middleware for load stats
export const setup = async (req: Request, res: Response, stats: unknown) => {
  // set render to res
}

const router = express.Router();
router.use('*', async (req: Request, res: Response) => {
  // const metrics = getMetrics(res);
  // metrics.reqInc();

  // const state: AppState = {
  //   context: {
  //     useTestId: false,
  //     platform: '',
  //     env: process.env.NODE_ENV || 'unknown',
  //   },
  // };

  // const extractor = new ChunkExtractor({
  //   stats: res.loadableStats,
  //   publicPath: `/${req.appName}`, // use cdn
  // });

  // try {
  //   const html = renderToString(extractor.collectChunks(<App state={state} />));
  //   const scripts = extractor.getScriptTags();
  //   const styles = extractor.getStyleTags();
  //   const result = ejs.render(template, {
  //     html,
  //     scripts,
  //     styles,
  //     state: `<script>window.state = ${JSON.stringify(state)}</script>`,
  //   });
  //   res.end(result);
  // } catch (error: unknown) {
  //   const msg = (error as Error).message;
  //   res.end(`server error: ${msg}`);
  // }
});

export default router;
