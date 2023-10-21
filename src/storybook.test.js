import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
const getMatchOptions = ({ context: { kind, story }, url }) => {
  return {
    failureThreshold: 0,
    failureThresholdType: 'percent',
  };
};
const beforeScreenshot = (page, { context: { kind, story }, url }) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
};
const afterScreenshot = ({ image, context }) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
};
initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    getMatchOptions,
    beforeScreenshot,
    afterScreenshot,
  }),
});