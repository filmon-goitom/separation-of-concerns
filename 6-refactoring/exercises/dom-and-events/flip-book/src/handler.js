import { reverseAndUpper } from './util';

export const reverseAndUpperHandler = event => {
    const input =  event.target.value

    const reversedUppercase = reverseAndUpper(input);
    //render result for user

    document.getElementById('output').innerHTML = reversesdUppercase
};
