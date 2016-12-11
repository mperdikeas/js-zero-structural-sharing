/* @flow */
require('source-map-support').install();
import 'babel-polyfill';
import {assert} from 'chai';

import {shareMemory} from '../lib/index.js';

describe('shareMemory', function () {
    if (false)
    it('should work with primitives'
       , function () {
           assert.isFalse(shareMemory(0, 0));
           assert.isFalse(shareMemory(0, 1));
           assert.isFalse(shareMemory(true, true));
           assert.isFalse(shareMemory(true, false));
           assert.isFalse(shareMemory(3, 1/0));
           assert.isFalse(shareMemory(undefined, null));
           assert.isFalse(shareMemory(NaN, NaN));
           assert.isFalse(shareMemory(null, null));
       });
    it('case 0'
       , function () {
           assert.isFalse(shareMemory({}, {}));
           assert.isFalse(shareMemory({v:1}, {v:1}));
           const o = {};
           assert.isTrue(shareMemory(o, o));
       });
    it('case 1'
       , function () {
           const o = {};
           const a = {v: o};
           const b = {i: 1, j:2, foo: a};
           assert.isTrue(shareMemory(a, b));
           const b2 = {i: 1, j:2, zoo: {foo: a}};
           assert.isTrue(shareMemory(a, b2));           
       });
    it('case 2'
       , function () {
           const o = {};
           const a = [o];
           assert.isTrue(shareMemory(o, a));
       });                 
});


const TEST_IF_STACK_TRACE_LINE_NUMBERS_ARE_CORRECTLY_REPORTED = false;

if (TEST_IF_STACK_TRACE_LINE_NUMBERS_ARE_CORRECTLY_REPORTED)
describe('between', function () {
    it('should work' , function () {
        assert.isTrue(!between(-0.00000000001, 0, 1)); 
        assert.isTrue( between(0,0,1));
        assert.isTrue( between(0.9999,0,1));
        assert.isTrue(!between(1,1,0,1));
        assert.isTrue( between(2,1,3));
        assert.isTrue(!between(2,3,1));
    });
    it('do stack traces work?' , function () { 
        assert.isTrue(false);
    });
    it('do stack traces work? (2)' , function () {
        (new Point(0,0)).equals(new Point(1,1));
    });
    it('do stack traces work? (3)' , function () {
        foo();
    });            
});
