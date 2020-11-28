/*
 * @Author: vivien
 * @Date: 2020-11-24 22:43:58
 * @Last Modified by: vivien
 * @LastEditTime: 2020-11-25 21:20:24
 */
import { Component, STATE, ATTRIBUTE, createElement } from './framework.js';
import { enableGesture } from './gesture.js';


export { STATE, ATTRIBUTE } from './framework.js';


export class Button extends Component {
    constructor() {
        super();
    }
    render() {
        this.childContainer = <span />
    this.root = (<div>{this.childContainer}</div>).render();
       return this.root;
    }
    appendChild(child){
        if(!this.childContainer)
          this.render();
        this.childContainer.appendChild(child);
    }
}