export function weatherImage(conditionID: number) {
    switch (conditionID) {
        case 2 : {
            return '../assets/images/thunderstorm.jpg';
            break;
        };
        case 3 : {
            return '../assets/images/stormcloud.jpg';
            break;
        };
        case 5 : {
            return '../assets/images/rainy.jpg';
            break;
        };
        case 6 : {
            return '../assets/images/snow.jpg';
            break;
        };
        case 7 : {
            return '../assets/images/foggy.jpg';
            break;
        };
        case 8 : {
            return '../assets/images/cloudy.jpg';
            break;
        };
    }
};