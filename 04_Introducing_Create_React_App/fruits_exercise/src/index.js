import { choice, remove } from './helpers';
import fruits from './foods';

//randomly draw a fruit from the array
let randFruit = choice(fruits);

console.log(fruits);

console.log(`I'd like one ${randFruit}, please`);

console.log(`Here you go: ${randFruit}`)

console.log('Delicious! May I have another?')

remove(fruits, randFruit);

console.log(`I'm sorry, we're all out. We have ${fruits.length} left`)