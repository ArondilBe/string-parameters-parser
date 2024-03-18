# @arondilbe/string-parameters-parser

- [@arondilbe/string-parameters-parser](#arondilbestring-parameters-parser)
  - [About the package](#about-the-package)
  - [How to use the parser](#how-to-use-the-parser)
    - [Example](#example)

## About the package

Small package to parse parameters in a string to set their corresponding values.

## How to use the parser

To use the parser, **import** `stringParametersParser` from `@arondilbe/string-parameters-parser` and then call the function `getStringWithParameterValues`.
This function takes 3 arguments:

- **parameterSymbol:** Which is the symbol use to identify a parameter in the string
- **baseString:**: Which is the base string with unparsed parameters
- **parameters:** Which is an object containing pairs of key and values for the different parameters contained in the base string

### Example

```typescript
import stringParametersParser from '@arondilbe/string-parameters-parser';

const parameterSymbol = ':';
const baseString = 'Hello :target !';

console.log(
  stringParametersParser.getStringWithParameterValues(
    parameterSymbol,
    baseString,
    { target: 'world' },
  ),
); //Display: Hello world !
console.log(
  stringParametersParser.getStringWithParameterValues(
    parameterSymbol,
    baseString,
    { target: 'dear user' },
  ),
); //Display: Hello dear user !
```
