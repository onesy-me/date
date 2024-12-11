import getStringVariables from '@onesy/utils/getStringVariables';
import setStringVariables from '@onesy/utils/setStringVariables';

import OnesyDate from './OnesyDate';
import formats from './formats';

// ISO as a default format value string
export default function format(onesyDate: OnesyDate = OnesyDate.onesyDate, value_: string = `YYYY-MM-DDTHH:mm:ss`): string {
  if (
    onesyDate &&
    onesyDate.valid
  ) {
    let value = value_;

    const formatValues = formats(onesyDate);
    const abrs = formatValues.map(item => item.abr);

    // Extract and save all words quoted with: '', "", ``, {} or [],
    // in a string, so adding abr values doesn't override 'em
    const words = getStringVariables(value, {
      variablesRegExp: /('.*?'|".*?"|`.*?`|\{.*?\}|\[.*?\])/g,
    });

    // Add placeholders before adding all abr values
    value = words.valueWithPlaceholders;

    // Replace all abr values
    // tslint:disable-next-line
    const reAbr = abrs.reduce((result, current, index) => result += `${current}${index !== abrs.length - 1 ? '|' : ''}`, '');

    const abrVariables = getStringVariables(value, {
      variablesRegExp: new RegExp(reAbr, 'g'),
      cleanVariables: false,
      placeholderPrefix: '__',
    });

    // Add placeholders for matches prior to adding all abr values
    value = abrVariables.valueWithPlaceholders;

    const abrVariablesToValue = [];

    abrVariables.variables.forEach(variable => {
      const format_ = formatValues.find(item => item.abr === variable);

      abrVariablesToValue.push({ key: variable, value: format_.value });
    });

    // Replace abr variables with appropriate values
    value = setStringVariables(value, abrVariablesToValue, {
      getVariables: false,
      placeholderPrefix: '__',
    });

    // Revert back all the saved words
    const wordsVariablesToValue = [];

    words.variables.forEach(variable => wordsVariablesToValue.push({ key: variable, value: variable }));

    value = setStringVariables(value, wordsVariablesToValue, { getVariables: false });

    return value;
  }
}
