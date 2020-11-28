/*
 * @Author: vivien
 * @Date: 2020-10-27 22:30:37
 * @Last Modified by: vivien
 * @LastEditTime: 2020-10-31 23:54:42
 */
const TICK  = Symbol('tick');
const TICK_HANDLE = Symbol('tick-handle');
const ANIMATIONS = Symbol('animations');
const START_TIME = Symbol('start-time');
const PAUSE_START = Symbol('pause-start');
const PAUSE_TIME = Symbol('pause-time');


export class Timeline {
    constructor(){
        this.state = 'Inited'
       this[ANIMATIONS] = new Set();
       this[START_TIME] = new Map();
    }
    start() {
        if(this.state !== 'Inited'){
            return;
        }
        this.state = 'started';
        let startTime = Date.now();
        this[PAUSE_TIME] = 0;
        this[TICK] = () => {
            let now = Date.now();
            for(let animation of this[ANIMATIONS]){
                let t;
                if(this[START_TIME].get(animation) < startTime){
                    t = now - startTime - this[PAUSE_TIME] - animation.delay
                } else {
                    t = now - this[START_TIME].get(animation) - this[PAUSE_TIME] - animation.delay
                }

                if(t > animation.duration){
                    this[ANIMATIONS].delete(animation)
                    t = animation.duration
                }
                if(t > 0){
                   animation.receive(t);
                }
            }
            this[TICK_HANDLE] = requestAnimationFrame(this[TICK]);
        }
       this[TICK]();
    }
    
    pause() {
        if(this.state !== 'started'){
            return;
        }
        this.state = 'paused';
        this[PAUSE_START] = Date.now();
        cancelAnimationFrame(this[TICK_HANDLE]);
    }
    resume() {
        if(this.state !== 'paused'){
            return
        }
        this.state = 'started';
       this[PAUSE_TIME] += Date.now() - this[PAUSE_START];
       this[TICK]();
    }

    reset(){
       this.state = 'Inited';
       this.pause();
       let startTime = Date.now();
       this[PAUSE_TIME] = 0;
       this[ANIMATIONS] = new Set();
       this[START_TIME] = new Map();
       this[PAUSE_START] = 0;
       this[TICK_HANDLE] = null;
    }

    add(animation, addTime){
        if(arguments.length < 2) {
            addTime = Date.now();
        }
        this[ANIMATIONS].add(animation);
        this[START_TIME].set(animation, addTime);
    }
}

export class Animation {
    constructor(object, property, startValue, endValue, duration, delay, timingFunction, template) {
        timingFunction = timingFunction || (v => v);
        template = template || (v => v);
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.timingFunction = timingFunction;
        this.delay = delay;
        this.template = template;
    }
    receive(time){
        let range = (this.endValue - this.startValue);
        let progress = this.timingFunction(time / this.duration);
        this.object[this.property] = this.template(this.startValue + range * progress)
    }
}