// cucumber.js
const common = [
    'tests/features/**/*.feature',        // Specify our feature files
    '--require-module ts-node/register',  // Load TypeScript module
    '--require tests/stepDefinitions/**/*.ts',  // Load step definitions
    '--require tests/world.js',            // Load custom world
    '--format progress-bar',               // Load progress-bar formatter
    '--format json:cucumber_report.json'   // Generate JSON report
  ].join(' ');
  
  module.exports = {
    default: common
  };
  