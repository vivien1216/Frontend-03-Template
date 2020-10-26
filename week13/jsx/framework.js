/*
 * @Author: vivien
 * @Date: 2020-10-24 15:24:13
 * @Last Modified by: vivien
 * @LastEditTime: 2020-10-24 18:54:45
 */
export function createElement (type, attributes, ...children) {
    let element;

    if(typeof type === 'string')
       element = new elementWrapper(type);
    else
       element = new type;

    for(let name in  attributes){
        element.setAttribute(name, attributes[name])
    }
    for(let child of children){
        if(typeof child === 'string'){
            child = new textWrapper(child)
        }
        element.appendChild(child);
    }
    return  element;
}

export class Component {
    constructor(type) {
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(child){
        child.mountTo(this.root);
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }
}

class textWrapper  extends Component {
    constructor(content){
        this.root = document.createTextNode(content);
    }
    
}

class elementWrapper extends Component {
    constructor(type){
        this.root = document.createElement(type);
    }
}