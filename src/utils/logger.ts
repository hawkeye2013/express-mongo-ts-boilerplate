import chalk from 'chalk';

const separator = chalk.grey('::');

const logInfo = (value: string, source?: string) => {
  const currentTime = new Date();
  console.log(
    currentTime +
      separator +
      chalk.blueBright('[INFO]') +
      separator +
      chalk.grey(source) +
      separator +
      chalk.grey(value),
  );
};

export { logInfo };
