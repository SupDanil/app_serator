export const ageConfirmed = (data) => {

    return {
        type: 'AGE_CONFIRMED',
        data: data
    };
}
export const setUserName = (data) => {
console.log(data)
    return {
        type: 'SET_NAME',
        data: data
    };
}