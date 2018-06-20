import {buildDijkstra} from '../../algorithm/dijkstra';

describe('buildDijkstra', () => {
  it('should find the shortest path in graph', () => {
    const g = {
      a: {
        b: {
          weight: 4
        }
      },
      b: {
        a: {
          weight: 4
        },
        c: {
          weight: 6
        },
        d: {
          weight: 6
        }
      },
      c: {
        b: {
          weight: 6
        }
      },
      d: {
        b: {
          weight: 6
        }
      }
    };
    const d = {
      a: Infinity,
      b: Infinity,
      c: Infinity,
      d: Infinity
    };
    const u = {
      a: false,
      b: false,
      c: false,
      d: false
    };

    const A = buildDijkstra('a', g, {...d}, {...u});
    const B = buildDijkstra('b', g, {...d}, {...u});
    const C = buildDijkstra('c', g, {...d}, {...u});
    const D = buildDijkstra('d', g, {...d}, {...u});

    expect(A.b).toBe('a');
    expect(A.c).toBe('b');
    expect(A.d).toBe('b');

    expect(B.a).toBe('b');
    expect(B.c).toBe('b');
    expect(B.d).toBe('b');

    expect(C.a).toBe('b');
    expect(C.b).toBe('c');
    expect(C.d).toBe('b');

    expect(D.a).toBe('b');
    expect(D.b).toBe('d');
    expect(D.c).toBe('b');
  });
});
