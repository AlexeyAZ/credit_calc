const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireEslint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env);
  config = rewireEslint(config, env);
  return config;
}