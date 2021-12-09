import TextBase from './TextBase';

export const Text = {
  Body: TextBase({
    textAlign: 'justify',
    fontFamily: 'pixel-operator',
    fontSize: 16,
    lineHeight: 24,
  }),
  SubBody: TextBase({
    textAlign: 'justify',
    fontFamily: 'pixel-operator',
    fontSize: 12,
    lineHeight: 20,
  }),
  Heading1: TextBase({
    fontFamily: 'pixel-operator-mono-bold',
    fontSize: 20,
    lineHeight: 32,
    uppercase: true,
  }),
  Heading2: TextBase({
    fontFamily: 'pixel-operator-bold',
    fontSize: 18,
    lineHeight: 20,
    uppercase: true,
  }),
  Heading3: TextBase({
    fontFamily: 'pixel-operator',
    fontSize: 18,
    lineHeight: 20,
    uppercase: true,
  }),
};
