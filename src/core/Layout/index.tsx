import { sizing } from '@src/constants';
import LayoutBase from './LayoutBase';

export const Layout = {
  Section: LayoutBase({
    marginBottom: sizing.l,
  }),
  SubSection: LayoutBase({
    marginBottom: sizing.m,
  }),
};
