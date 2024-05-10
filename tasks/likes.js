function likes(names) {
    const arrayLength = names.length;
    if (arrayLength === 0) {
        return 'no one likes this';
    } if (arrayLength === 1) {
        return `${names[0]} likes this`;
    } if (arrayLength === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } if (arrayLength === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }

    const changedArray = names.reduce((acc, value, index) => {
        if (index === 1) {
            // eslint-disable-next-line no-param-reassign
            acc += `, ${value}`;
            return acc;
        }
        if (index === 3) {
            return `${acc} and ${names.length - 2} others like this`;
        }
        return acc;
    });
    return changedArray;
}

console.warn(likes(['Alex', 'Jacob', 'Mark', 'Max']));
