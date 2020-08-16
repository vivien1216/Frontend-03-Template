/*
 * @Author: vivien
 * @Date: 2020-08-16 16:00:43
 * @Last Modified by: vivien
 * @LastEditTime: 2020-08-16 16:04:09
 */
function match(string){
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
    if(c === 'a'){
        return FoundA2;
    } else {
        return start(c);
    }
}

function FoundA2(c){
    if(c === 'b'){
        return FoundB2;
    } else {
        return start;
    }
}

function FoundB2(c){
    if(c === 'a'){
        return FoundA3;
    } else {
        return start(c);
    }
}

function FoundA3(c){
    if(c === 'b'){
        return FoundB3;
    } else {
        return start;
    }
}

function FoundB3(c){
    if(c === 'x'){
        return end;
    } else {
        return start(c);
    }
}

console.log(match('abababx'));