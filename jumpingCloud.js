function jumpingOnClouds(c) {
    let count = 0;
    let cloud = 0;

    while (true) {
        if (cloud + 2 < c.length && c[cloud + 2] == 0) {
            cloud += 2;
        } else if (cloud + 1 < c.length) {
            cloud++;
        } else {
            break;
        }
        count++;
    }
    return count;
}
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])