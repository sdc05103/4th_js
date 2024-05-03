let options= {
    title: "Menu",
    width: 100,
    height: 200,
    k1: 'v1',
    k2: 'v2',
} 

const {width, title, height: newHeight, ...rest} = options;

console.log(newHeight);