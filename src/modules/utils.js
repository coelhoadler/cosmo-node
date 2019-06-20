module.exports = {
    reverse: str => {
        return str
            .trim()
            .split(/\s+/g)
            .reverse()
            .join(" ");
    }
}