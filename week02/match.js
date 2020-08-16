/*
 * @Author: vivien
 * @Date: 2020-08-16 13:21:12
 * @Last Modified by: vivien
 * @LastEditTime: 2020-08-16 13:59:02
 */
function match(string) {
    let state = start;
    for(let c of string){
        state = state(c);
    }
    return state === end;
}

function start(c){
    if(c === 'a'){
        return FoundA;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function FoundA(c) {
    if(c === 'b'){
      return FoundB;
    } else {
        return start(c);
    }
}

function FoundB(c){
    if(c === 'c'){
        return FoundC;
    } else {
        return start(c);
    }
}

function FoundC(c){
    if(c === 'd'){
        return FoundD;
    } else {
        return start(c);
    }
}

function FoundD(c){
    if(c === 'e'){
        return FoundE;
    } else {
        return start(c);
    }
}

function FoundE(c){
    if(c === 'f'){
        return end;
    } else {
        return start(c);
    }
}

console.log(match('I amdfs abcdefghk'));