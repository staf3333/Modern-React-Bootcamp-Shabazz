function choice(items) {
    randIndex = Math.floor(Math.random() * items.length);
    return items[randIndex];
}

function remove(items, item) {
    for (i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return items.splice(i, 1);
        }
    }
    return undefined;
}

export { choice, remove };