import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(
  chalk.blue(
    'Generating minified bundle for production. This will take a moment...',
  ),
);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));

    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));

    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // Si el build terminó
  console.log(
    chalk.green('Your app has been built for production and written to /dist'),
  );

  return 0;
});
