import CoinpaymentsError from '../error';
import Schema from './schema';

import { CMDS } from '../constants';

import { CoinpaymentsRequest } from '../types/base';

export const getVariations = (validationSchema: any): Array<Array<string>> => {
  const variations = validationSchema.find(key => Array.isArray(key));
  const staticKeys = validationSchema.filter(key => !Array.isArray(key));
  if (!variations?.length) {
    return [validationSchema];
  }
  return variations.map(variation => {
    return [].concat(staticKeys).concat([variation]);
  });
};

export const getValidationSchema = (
  cmd: string,
): Array<Array<string> | string> => {
  if (!cmd) {
    throw new CoinpaymentsError('No method passed');
  }
  const validationSchema = Schema[cmd];
  if (!validationSchema) {
    throw new CoinpaymentsError(`No such method ${cmd}`);
  }
  return validationSchema;
};

export const validate = (
  validationSchema: any,
  options: CoinpaymentsRequest,
): boolean => {
  const optionKeys = Object.keys(options);
  const validationRules = getVariations(validationSchema);
  return validationRules.some(rule => rule.every(r => optionKeys.includes(r)));
};

export const validateMassWithDrawal = (
  options: CoinpaymentsRequest,
): boolean => {
  const regex = /(wd\[wd[0-9]*\]\[(amount|address|currency|dest_tag)\]|cmd)/;
  return Object.keys(options).every(key => regex.test(key));
};

export const validatePayload = (options: CoinpaymentsRequest): void => {
  if (options.cmd === CMDS.CREATE_MASS_WITHDRAWAL) {
    if (!validateMassWithDrawal(options)) {
      throw new CoinpaymentsError('Invalid mass withdrawal payload', options);
    }
  }
  const validationSchema = getValidationSchema(options.cmd);
  if (!validate(validationSchema, options)) {
    throw new CoinpaymentsError('Missing parameters', options);
  }
};
