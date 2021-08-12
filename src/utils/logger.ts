import chalk from 'chalk';

const separator = chalk.grey('::');

const logInfo = (value: string, source?: string) => {
  const currentTime = new Date();
  console.log(
    currentTime.toISOString() +
      separator +
      chalk.blueBright('[INFO]') +
      separator +
      chalk.grey(source) +
      separator +
      chalk.grey(value),
  );
};

const logSuccess = (value: string, source?: string) => {
  const currentTime = new Date();
  console.log(
    currentTime.toISOString() +
      separator +
      chalk.greenBright('[SUCCESS]') +
      separator +
      chalk.grey(source) +
      separator +
      chalk.grey(value),
  );
};

const logWarning = (value: string, source?: string) => {
  const currentTime = new Date();
  console.log(
    currentTime.toISOString() +
      separator +
      chalk.yellowBright('[WARN]') +
      separator +
      chalk.grey(source) +
      separator +
      chalk.grey(value),
  );
};

const logError = (value: string, source?: string) => {
  const currentTime = new Date();
  console.log(
    currentTime.toISOString() +
      separator +
      chalk.redBright('[ERROR]') +
      separator +
      chalk.grey(source) +
      separator +
      chalk.grey(value),
  );
};

export { logInfo, logWarning, logSuccess, logError };
