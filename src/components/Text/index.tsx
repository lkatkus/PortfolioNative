import TextBase from './TextBase';

export const Text = {
  Body: TextBase({
    textAlign: 'justify',
    fontFamily: 'roboto-regular',
    fontSize: 16,
    lineHeight: 24,
  }),
  SubBody: TextBase({
    textAlign: 'justify',
    fontFamily: 'roboto-regular',
    fontSize: 12,
    lineHeight: 20,
  }),
  Heading1: TextBase({
    fontFamily: 'press-start',
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 56,
    uppercase: true,
  }),
  Heading2: TextBase({
    fontFamily: 'press-start',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 24,
    uppercase: true,
  }),
};
