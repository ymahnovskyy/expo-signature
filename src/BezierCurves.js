/**
 * https://en.wikipedia.org/wiki/Bézier_curve
 */

 export function bezierLinear(out, a, b, t) {
  const nt = 1 - t;

  out[0] = nt * a[0] + t * b[0];
  out[1] = nt * a[1] + t * b[1];
  return out;
}

export function bezierQuadratic(out, a, p, b, t) {
  const tt = t * t;
  const nt = 1 - t;
  const ntnt = nt * nt;

  out[0] = ntnt * a[0] + 2 * nt * t * p[0] + tt * b[0];
  out[1] = ntnt * a[1] + 2 * nt * t * p[1] + tt * b[1];
  return out;
}

export function bezierCubic(out, a, p1, p2, b, t) {
  const tt = t * t;
  const nt = 1.0 - t;
  const ntnt = nt * nt;

  out[0] = ntnt * nt * a[0] + 3 * ntnt * t * p1[0] + 3 * tt * nt * p2[0] + tt * t * b[0];
  out[1] = ntnt * nt * a[1] + 3 * ntnt * t * p1[1] + 3 * tt * nt * p2[1] + tt * t * b[1];
  return out;
}