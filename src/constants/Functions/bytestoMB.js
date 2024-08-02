export function bytesToSize(bytes) {
    if (isNaN(bytes) || bytes < 0) {
        return 'Invalid input';
    }

    const kilobytes = (bytes * 2) / 1024;
    const megabytes = kilobytes / 1024;
    const gigabytes = megabytes / 1024;

    if (gigabytes >= 1) {
        return `${gigabytes.toFixed(2)} GB`;
    } else if (megabytes >= 1) {
        return `${megabytes.toFixed(2)} MB`;
    } else {
        return `${kilobytes.toFixed(2)} KB`;
    }
}
