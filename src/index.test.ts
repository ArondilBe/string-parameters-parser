import stringParametersParser from './index';

const parameterSymbol = ':';
const message = 'Hello :target :punctuation';
const parameters = {
  target: 'world',
  punctuation: '!',
};

describe('getStringWithParameterValues', () => {
  it('Not found paraters', () => {
    expect(() =>
      stringParametersParser.getStringWithParameterValues(
        parameterSymbol,
        message,
        {
          ...parameters,
          ...{ invalid: 'invalid value' },
        },
      ),
    ).toThrow(Error);
  });

  it('Get message with parameter values', () => {
    expect(
      stringParametersParser.getStringWithParameterValues(
        parameterSymbol,
        message,
        parameters,
      ),
    ).toEqual('Hello world !');
  });
});
