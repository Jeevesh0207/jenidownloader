export function formatViewCount(count) {
    if (isNaN(count) || count < 0) {
        return 'Invalid input';
    }

    if (count >= 1000000) {
        return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        return count.toString();
    }
}