// Code your solutions in this file

const countDown = function(number) {
    while (number >= 0){
        console.log(number);

        number--;
    } 
};

const writeCards = function(names, event_name) {
    let message = '';
    const cards = [];

    for (let i =0; i < names.length; i++) {
        let name = names[i];
        message = `Thank you, ${name}, for the wonderful surprise gift!`;

        cards.push(message);
    };

    return cards;
};