module.exports = function toReadable (number) {
    const readableNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred'
    };
    let input = [],
        hundreds = '',
        dozens = '',
        units = '';
        hundreds = '300',
        secondDozens = '';

    input = number.toString().split('');

    if( input.length === 1 ) {
        return readableNumbers[input];
    }
    if( input.length === 2 ) {
        dozens = input[0] + '0';
        if( input[0] === '1' ) {
            secondDozens = joinTwoUnits(input[0], input[1]);
            return readableNumbers[secondDozens];
        } else if( input[1] === '0' ) {
            return readableNumbers[dozens];
        } else {
            dozens = `${input[0]}0`;
            units = input[1];
            return `${readableNumbers[dozens]} ${readableNumbers[units]}`
        }
    } else {
        hundreds = input[0] + '00';
        if( input[1] === '0' && input[2] === '0') {
            return readableNumbers[hundreds];
        } else if( input[1] === '0' && input[2] !== '0') {
            units = input[2];
            return `${readableNumbers[hundreds]} ${readableNumbers[units]}`;
        } else if( input[1] === '1') {
            secondDozens = joinTwoUnits(input[1], input[2]);
            return `${readableNumbers[hundreds]} ${readableNumbers[secondDozens]}`;
        } else if( input[2] === '0' ) {
            dozens = `${input[1]}0`;
            return `${readableNumbers[hundreds]} ${readableNumbers[dozens]}`;
        } else {
            dozens = `${input[1]}0`;
            units = input[2];
            return `${readableNumbers[hundreds]} ${readableNumbers[dozens]} ${readableNumbers[units]}`;
        }
    }
    function joinTwoUnits(one, two) {
        return one + two;
    }
}

