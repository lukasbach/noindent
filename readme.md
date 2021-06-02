# `noindent`

Allows you to use multiline strings created with template literals that
were constructed with indentation. `noindent` cleans out the indentation,
making the resulting string clean from inconsistent indentations while
still being easy to read on code.

Easy to use with trivial interface, creates no additional dependencies,
includes typings and is tiny (616 bytes minified, 369 bytes gzipped).

## Example

```typescript
import noindent from 'noindent'

(() => {
  const result = noindent(`
    Example input
    
    Usually, this would result in a string
    that contains lots of unwanted whitespaces
    
      Which can lead to unwanted results if
      the strings are used by whitespace-sensitive
      code
      
    Or if the output is used as text where
    whitespace is visible. 
  `)
})()
```

produces `result` (whitespaces and line breaks that
are preserved are displayed as symbols):

```
Example·input⏎
⏎
Usually,·this·would·result·in·a·string⏎
that·contains·lots·of·unwanted·whitespaces⏎
⏎
··Which·can·lead·to·unwanted·results·if⏎
··the·strings·are·used·by·whitespace-sensitive⏎
··code⏎
⏎
Or·if·the·output·is·used·as·text·where⏎
whitespace·is·visible. 
```

Note that further indentations, i.e. blocks of text that
are further offset from the rest of the text, are preserved. Also,
if the string is ended in a last line which only contains spaces, this
line is omitted.

## Installation

Install with `yarn add noindent` or `npm i noindent --save`,
then import with `import noindent from 'noindent'`
or `const noindent = require('noindent')`.

## Corner Cases

Various alternative syntax applications should work as well. The following
code snippets all produce the output

```
Test1⏎
Test2⏎
··Test3
```

### Text starts in first line

```typescript
import noindent from 'noindent'

(() => {
  const result = noindent(`Test1
    Test2
      Test3
  `)
})()
```

### Text ends on last line with content

```typescript
import noindent from 'noindent'

(() => {
  const result = noindent(`
    Test1
    Test2
      Test3`)
})()
```
