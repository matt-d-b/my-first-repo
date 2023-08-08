#!/usr/bin/env node

const fs      = require("fs");
const path    = require("path");
const os      = require("os");
const console = require("console");

Reset      = "\x1b[0m";
Bright     = "\x1b[1m";
Dim        = "\x1b[2m";
Underscore = "\x1b[4m";
Blink      = "\x1b[5m";
Reverse    = "\x1b[7m";
Hidden     = "\x1b[8m";

FgBlack   = "\x1b[30m";
FgRed     = "\x1b[31m";
FgGreen   = "\x1b[32m";
FgYellow  = "\x1b[33m";
FgBlue    = "\x1b[34m";
FgMagenta = "\x1b[35m";
FgCyan    = "\x1b[36m";
FgWhite   = "\x1b[37m";
FgGray    = "\x1b[90m";

BgBlack   = "\x1b[40m";
BgRed     = "\x1b[41m";
BgGreen   = "\x1b[42m";
BgYellow  = "\x1b[43m";
BgBlue    = "\x1b[44m";
BgMagenta = "\x1b[45m";
BgCyan    = "\x1b[46m";
BgWhite   = "\x1b[47m";
BgGray    = "\x1b[100m";

const yellowText = (textContent) => {
  return `${Bright}${FgYellow}${textContent}${Reset}`;
};
const blueText = (textContent) => {
  return `${Bright}${FgBlue}${textContent}${Reset}`;
};
const cyanText = (textContent) => {
  return `${Bright}${FgCyan}${textContent}${Reset}`;
};
const greenText = (textContent) => {
  return `${Bright}${FgGreen}${textContent}${Reset}`;
};
const redText = (textContent) => {
  return `${Bright}${FgRed}${textContent}${Reset}`;
};
const grayText = (textContent) => {
  return `${FgGray}${textContent}${Reset}`;
};

function printDirectoryItem(directoryItem) {
  console.log("\t 📁 %s", blueText(directoryItem));
}

function readFilesInPath(path) {
  fs.readdir(path, function (err, items) {
    let i = 0,
      j = items.length;
    for (; i < j; i++) {
      let item = items[i];

      printDirectoryItem(item);
    }
  });
}

function main() {
  console.log(`${Underscore}${Bright}${BgYellow}${FgWhite}${__dirname}${Reset}`);
  readFilesInPath(__dirname);

  // console.log("%s", greenText("Success"));


}

main();
