/*
 * @Author: vivien
 * @Date: 2020-12-03 20:20:02
 * @Last Modified by: vivien
 * @LastEditTime: 2020-12-06 23:06:29
 */
var assert = require('assert')
import {parseHTML} from '../src/parser';


describe('parser html:', function(){
    it('<a></a>', function(){
        var tree = parseHTML('<a></a>');
        assert.equal(tree.children[0].tagName, "a")
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a href="https://u.geekbang.org/lesson/28?article=292476"></a>', function(){
        var tree = parseHTML('<a href="https://u.geekbang.org/lesson/28?article=292476"></a>');
        console.log(tree);
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a href ></a>', function(){
        var tree = parseHTML('<a href ></a>');
        console.log(tree);
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a href id></a>', function(){
        var tree = parseHTML('<a href id></a>');
        console.log(tree);
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a href="abc" id></a>', function(){
        var tree = parseHTML('<a href="abc" id></a>');
        console.log(tree);
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })
    it('<a id=abc ></a>', function(){
        var tree = parseHTML('<a id=abc ></a>');
        console.log(tree);
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })
    it('<a id=abc />', function(){
        var tree = parseHTML('<a id=abc />');
        console.log(tree);
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a id=\'abc\' />', function(){
        var tree = parseHTML('<a id=\'abc\' />');
        console.log(tree);
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a />', function(){
        var tree = parseHTML('<a />');
        console.log(tree);
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<A /> upper case', function(){
        var tree = parseHTML('<A />');
        console.log(tree);
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<>', function(){
        var tree = parseHTML('<>');
        console.log(tree);
        assert.equal(tree.children.length, 0)
    })

    it('<style>#a{color:red;}</style>', function(){
        var tree = parseHTML('<style>#a{color:red;}</style>');
        assert.equal(tree.children[0].tagName, 'style')
    })

    it('<style>.a{color:red;}</style>', function(){
        var tree = parseHTML('<style>.a{color:red;}</style>');
        assert.equal(tree.children[0].tagName, 'style')
    })

    it('<style>p{color:red;}</style>', function(){
        var tree = parseHTML('<style>p{color:red;}</style>');
        assert.equal(tree.children[0].tagName, 'style')
    })

    it('<style>p.a span{color:red;}</style>', function(){
        var tree = parseHTML('<style>p.a span{color:red;}</style>');
        assert.equal(tree.children[0].tagName, 'style')
    })

    it('<style>#a{color:red;}</style><body><div id="a"></div></body>', function(){
        var tree = parseHTML('<style>#a{color:red;}</style><body><div id="a"></div></body>');
        assert.equal(tree.children[0].tagName, 'style')
    })

    it('<style>.a{color:red;}</style><body><div class="a"></div></body>', function(){
        var tree = parseHTML('<style>.a{color:red;}</style><body><div class="a"></div></body>');
        assert.equal(tree.children[0].tagName, 'style')
    })
})
