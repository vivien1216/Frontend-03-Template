/*
 * @Author: vivien
 * @Date: 2020-11-29 12:57:35
 * @Last Modified by: vivien
 * @LastEditTime: 2020-11-29 16:35:23
 */
var assert = require('assert')
// var add = require('../add.js')
import {add, mul} from '../add.js'

it('add function testing', function(){
    assert.equal(add(1,2), 3);
})

it('add function testing', function(){
    assert.equal(add(3,4), 7);
})

it('mul function testing', function(){
    assert.equal(mul(3,4), 12);
})