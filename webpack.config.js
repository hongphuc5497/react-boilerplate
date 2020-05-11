import '@babel/register';
import webpackMerge from 'webpack-merge';
import common from './config/webpack/webpack.common.babel';

const envs = {
  development: 'dev',
  production: 'prod'
};

const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./config/webpack/webpack.${env}.babel`);

module.exports = webpackMerge(common, envConfig);


