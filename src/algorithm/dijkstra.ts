export const buildDijkstra = (start: string, g: any, d: any, u: any) => {
  d[start] = 0;
  const keys = Object.keys(g);
  const result = {};
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < keys.length; i++) {
    let v = '';

    for (const j of keys) {
      if (!u[j] && (!v || d[j] < d[v])) {
        v = j;
      }
    }
    if (d[v] === Infinity) {
      break;
    }
    u[v] = true;
    // tslint:disable-next-line:forin
    for (const j in g[v]) {
      const to = j;
      const weight = g[v][j].weight;
      if (d[v] + weight < d[to]) {
        d[to] = d[v] + weight;
        result[to] = v;
      }
    }
  }
  return result;
};
