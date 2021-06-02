const noindent = (str: string) => {
  const linebreak = str.includes('\r\n') ? '\r\n' : str.includes('\r') ? '\r' : '\n';
  const lines = str.split(linebreak);
  const firstLineIndex = lines.findIndex(line => line.length > 0);
  const firstIndentedLineIndex = lines.findIndex(line => line.length > 0 && line.startsWith(' '));
  const indentation = lines[firstIndentedLineIndex].split('').findIndex(char => char !== ' ');
  const prefix = ' '.repeat(indentation);

  return lines
    .map((line, index) => {
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
        throw Error(`noindent: Line ${index} (${line}) did not start with ${indentation} spaces`);
      }

      return line.substring(indentation);
    })
    .filter(line => line !== null)
    .join(linebreak);
};

export default noindent;
