const fs = require("fs");
const path = require("path");

const _ = require("lodash");
const chalk = require("chalk");

const elementsDir = path.join(__dirname, "../elements");
const elementNames = fs.readdirSync(elementsDir);
const templateFile = path.join(__dirname, "../test/.index.html");
const outFile = path.join(__dirname, "../test/index.html");

function hasTests(element) {
  const path = testPathAbs(element);
  return fs.existsSync(path);
}

function testPathAbs(element) {
  return path.join(elementsDir, element, "test", "index.html");
}

function testPathRel(prefix) {
  return function(element) {
    return path.join(
      prefix,
      "node_modules",
      "@amyscript",
      element,
      "test",
      "index.html"
    );
  };
}

function formatPaths(paths) {
  return paths.map(path => `        "${path}"`).join(",\n");
}

const withTests = _(elementNames).filter(hasTests);

const testRelPaths = withTests.map(testPathRel("..")).value();

console.log(`Injecting the following elements into the test suite:`);
console.log(
  elementNames
    .filter(hasTests)
    .map(e => ` - ${chalk.blue(e)}`)
    .join("\n")
);
console.log();

// write test/index.html

const template = fs.readFileSync(templateFile).toString();

const withPaths = template.replace(
  /\/\*\s+inject:elements\s+\*\//,
  formatPaths(testRelPaths)
);

fs.writeFileSync(outFile, withPaths);

console.log(chalk.green(`Complete!`));
