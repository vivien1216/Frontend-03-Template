/*
 * @Author: vivien
 * @Date: 2020-10-28 22:43:02
 * @Last Modified by: vivien
 * @LastEditTime: 2020-10-31 23:11:16
 */
import { Timeline, Animation} from './animation.js';
import { ease, easeIn } from './ease.js';

let tl = new Timeline();

tl.start();


tl.add(new Animation(document.querySelector("#el").style, "transform", 0, 500, 2000, 0, easeIn, v => `translateX(${v}px)`));

document.querySelector('#el2').style.transition = 'transform 2s ease-in';
document.querySelector('#el2').style.transform = 'translateX(500px)';

document.querySelector('#pause-btn').addEventListener('click', () => { tl.pause() })

document.querySelector('#resume-btn').addEventListener('click', () => { tl.resume() })