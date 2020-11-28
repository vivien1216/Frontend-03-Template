/*
 * @Author: vivien
 * @Date: 2020-11-25 21:28:49
 * @Last Modified by: vivien
 * @LastEditTime: 2020-11-25 23:05:49
 */
import { Component, STATE, ATTRIBUTE, createElement } from './framework.js';
import { enableGesture } from './gesture.js';


export { STATE, ATTRIBUTE } from './framework.js';


export class List extends Component {
    constructor() {
        super();
    }
    render() {
       this.children = this[ATTRIBUTE].data.map(this.template)
       this.root = (<div>{this.children}</div>).render();
       return this.root;
    }
    appendChild(child){
        this.template = (child)
        // render();
    }
}
