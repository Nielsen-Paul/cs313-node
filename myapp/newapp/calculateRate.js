// A function to calculate the postal rate
module.exports = function calculateRate(type, weight) {

    // create a return value variable
    let rate = 0;

    // switch the type
    if (type == 'stamped') {
        switch (calculateWeight(weight)) {
            case 10:
                rate = "$0.50";
                break;
            case 20:
                rate = "$0.71";
                break;
            case 30:
                rate = "$0.92";
                break;
            case 35:
                rate = "$1.13";
                break;
            default:
                rate = "Either no weight entered or too heavy for Letter (Stamped)";
        }
    }
    else if (type == 'metered') {
        switch (calculateWeight(weight)) {
            case 10:
                rate = "$0.47";
                break;
            case 20:
                rate = "$0.68";
                break;
            case 30:
                rate = "$0.89";
                break;
            case 35:
                rate = "$1.10";
                break;
            default:
                rate = "Either no weight entered or too heavy for Letter (Metered)";
        }
    }
    else if (type == 'largeEnvelope') {
        switch (Math.ceil(weight)) {
            case 1:
                rate = "$1.00";
                break;
            case 2:
                rate = "$1.21";
                break;
            case 3:
                rate = "$1.42";
                break;
            case 4:
                rate = "$1.63";
                break;
            case 5:
                rate = "$1.84";
                break;
            case 6:
                rate = "$2.05";
                break;
            case 7:
                rate = "$2.26";
                break;
            case 8:
                rate = "$2.47";
                break;
            case 9:
                rate = "$2.68";
                break;
            case 10:
                rate = "$2.89";
                break;
            case 11:
                rate = "$3.10";
                break;
            case 12:
                rate = "$3.31";
                break;
            case 13:
                rate = "$3.52";
                break;
            default:
                rate = "Either no weight entered or too heavy for Large Envelope (Flats)";
        }
    }
    else if (type == 'fcPackage') {
        switch (Math.ceil(weight)) {
            case 1:
                rate = "$3.50";
                break;
            case 2:
                rate = "$3.50";
                break;
            case 3:
                rate = "$3.50";
                break;
            case 4:
                rate = "$3.50";
                break;
            case 5:
                rate = "$3.75";
                break;
            case 6:
                rate = "$3.75";
                break;
            case 7:
                rate = "$3.75";
                break;
            case 8:
                rate = "$3.75";
                break;
            case 9:
                rate = "$4.10";
                break;
            case 10:
                rate = "$4.45";
                break;
            case 11:
                rate = "$4.80";
                break;
            case 12:
                rate = "$5.15";
                break;
            case 13:
                rate = "$5.50";
                break;
            default:
                rate = "Either no weight entered or too heavy for First-Class Package Service - Retail";
        }
    }
    else {
        rate = "Error: Try Again";
    }

    // return the rate
    return rate;
}

function calculateWeight(weight) {
    // create a variable to store the return value
    let returnWeight = 0;

    // see if the weight is less than or equal to 3 or greater than 3.5
    if (weight <= 3 || weight > 3.5) {
        returnWeight = Math.ceil(weight) * 10;
    } else if (weight > 3 && weight <= 3.5) {
        returnWeight = 35;
    }

    // return the return weight
    return returnWeight;
}