import { expect } from 'chai';

import Sample from '../src/Sample';

describe('Sample test', () => {
  it('Sample must be construct also property must be bar', () => {
    const sample = new Sample();
    expect(sample.getProp()).to.be.equal('bar');
    expect(sample.deprecatedGetProp()).to.be.equal('bar');
  });
});
