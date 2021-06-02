"use strict";
exports.__esModule = true;
var noindent = function (str) {
    var linebreak = str.includes('\r\n') ? '\r\n' : str.includes('\r') ? '\r' : '\n';
    var lines = str.split(linebreak);
    var firstLineIndex = lines.findIndex(function (line) { return line.length > 0; });
    var firstIndentedLineIndex = lines.findIndex(function (line) { return line.length > 0 && line.startsWith(' '); });
    var indentation = lines[firstIndentedLineIndex].split('').findIndex(function (char) { return char !== ' '; });
    var prefix = ' '.repeat(indentation);
    return lines
        .map(function (line, index) {
        if (index === lines.length - 1 && line.match(/^\s+$/)) {
            // Filter out last line if it only contains prefix spaces
            return null;
        }
        if (index < firstLineIndex) {
            // Filter out line if it was before the first line with content
            return null;
        }
        if (index < firstIndentedLineIndex) {
            // If the line was before the first indented line, dont remove whitespace
            return line;
        }
        if (line.substr(0, indentation) !== prefix) {
            throw Error("noindent: Line " + index + " (" + line + ") did not start with " + indentation + " spaces");
        }
        return line.substring(indentation);
    })
        .filter(function (line) { return line !== null; })
        .join(linebreak);
};
exports["default"] = noindent;
