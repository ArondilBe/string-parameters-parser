import chalk from 'chalk';

/**
 * Return a message with its parameters set to their corresponding value
 * @param {string} parameterSymbol The symbol which indicate the next word is a parameter
 * @param {string} baseString The message without its parameter values
 * @param {Record<string, string>} parameters The list of message's parameters and their corresponding values
 * @returns {string} The message with its parameters set to their corresponding value
 * @throws {Error} When at least one parameter passed in the parameters object is not found in the message
 */
const getStringWithParameterValues = (
  parameterSymbol: string,
  baseString: string,
  parameters: Record<string, string>,
): string => {
  const parametersKeys = Object.keys(parameters);
  let messageWithParameterValues = baseString;
  const notFoundParameters: string[] = [];
  parametersKeys.forEach((parameterKey) => {
    const parameterInMessage = `${parameterSymbol}${parameterKey}`;
    if (!baseString.includes(parameterInMessage)) {
      notFoundParameters.push(parameterInMessage);
    }
    messageWithParameterValues = messageWithParameterValues.replace(
      parameterInMessage,
      parameters[parameterKey],
    );
  });
  if (notFoundParameters.length) {
    let notFoundParametersMessage: string = '';
    notFoundParameters.forEach(
      (parameter) =>
        (notFoundParametersMessage = notFoundParametersMessage.concat(
          `\n- ${parameter.slice(1)}`,
        )),
    );

    throw Error(
      chalk.red(
        `Parameter not found in message: The following parameters were not found in the message: ${notFoundParametersMessage}`,
      ),
    );
  }
  return messageWithParameterValues;
};

const stringParametersParser = { getStringWithParameterValues };

export default stringParametersParser;
