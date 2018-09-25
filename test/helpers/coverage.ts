import { readFile } from 'fs';
import path from 'path';

const { log } = console;

const average = (arr: number[]): number => arr.reduce((p, c) => p + c, 0) / arr.length;

readFile(
  path.join(__dirname, '/../../coverage/coverage-summary.json'),
  {
    encoding: 'utf8',
  },
  (err, json) => {
    if (err) {
      log('0.0');
    } else {
      const percentages: number[] = [];
      const data: any = JSON.parse(json);
      Object.keys(data.total).forEach((type) => {
        const { pct } = data.total[type];
        percentages.push(pct);
      });
      const avg: number = average(percentages);
      log(avg.toFixed(2));
    }
  },
);
