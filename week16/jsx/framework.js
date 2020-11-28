/*
 * @Author: vivien
 * @Date: 2020-10-24 15:24:13
 * @Last Modified by: vivien
 * @LastEditTime: 2020-11-25 23:09:50
 */
export function createElement (type, attributes, ...children) {
    console.log('type', type)
    let element;

    if(typeof type === 'string')
       element = new elementWrapper(type);
    else
       element = new type;

    for(let name in  attributes){
        element.setAttribute(name, attributes[name])
    }
    let processChildren = (children) => {
        for(let child of children){
            if((typeof child === 'object') && (child instanceof Array)){
                processChildren(child); 
                continue;
            }

            if(typeof child === 'string'){
                child = new textWrapper(child)
            }
            // console.log(child)
            element.appendChild(child);
        }
    }
    processChildren(children);

    return  element;
}

export const STATE = Symbol('state');
export const ATTRIBUTE  = Symbol('attribute');

export class Component {
    constructor(type) {
        this[ATTRIBUTE] = Object.create(null); 
        this[STATE] = Object.create(null); 
    }
    setAttribute(name, value) {
        this[ATTRIBUTE][name] = value;
    }
    render() {
        return this.root;
    }
    appendChild(child){
        child.mountTo(this.root);
    }
    mountTo(parent){
        if(!this.root){
            this.render()
        }
        parent.appendChild(this.root)
    }
    triggerEvent(type,args){
        this[ATTRIBUTE]['on' + type.replace(/^[\s\S]/, s => s.toUpperCase())](new CustomEvent(type, {detail: args}))
    }
}

class textWrapper  extends Component {
    constructor(content){
        super();
        this.root = document.createTextNode(content);
    }
}

class elementWrapper extends Component {
    constructor(type){
        super();
        this.root = document.createElement(type);
    }
    setAttribute(name, value){
        this.root.setAttribute(name, value);
    }
}