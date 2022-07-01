function orientation(p, q, r) {
    let val = (q.pointY - p.pointY) * (r.pointX - q.pointX) -
        (q.pointX - p.pointX) * (r.pointY - q.pointY);

    if (val === 0) return 0;
    return (val > 0) ? 1 : 2;
}

export function convexHullService(points, n) {

    if (n < 3) return;

    let hull = [];

    let l = 0;
    for (let i = 1; i < n; i++)
        if (points[i].pointX < points[l].pointX)
            l = i;

    let p = l, q;
    do {

        hull.push(points[p]);

        q = (p + 1) % n;

        for (let i = 0; i < n; i++) {

            if (orientation(points[p], points[i], points[q]) === 2)
                q = i;
        }

        p = q;

    } while (p !== l);


    return hull;

}

