function greetingFun(name) {
    console.log(`Namaskar ${name}`);
}

function paramPass(fun, name){
    return fun(name);
}

const param = "Sir";
paramPass(greetingFun, param);

// function greeting(name){
//     console.log(`Namaste ${name}`)
// }

// function passName(fun,name= "Spiderman "){
//     fun(name);
// }

// const nameFull = "ironman"
// passName(greeting,nameFull)