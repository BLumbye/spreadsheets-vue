import { describe, it } from 'vitest';
import { listToCsv, tableToCsv } from '../src';
import { Table } from '../src/types';

describe('lists', () => {
  it('normal', ({ expect }) => {
    expect(listToCsv([1, 2, 3])).toBe('1\n2\n3');
  });
  it('with header', ({ expect }) => {
    expect(listToCsv([1, 2, 3], { header: 'numbers' })).toBe('numbers\n1\n2\n3');
  });
  it('with horizontal direction', ({ expect }) => {
    expect(listToCsv([1, 2, 3], { direction: 'horizontal' })).toBe('1,2,3');
  });
  it('with header and horizontal direction', ({ expect }) => {
    expect(listToCsv([1, 2, 3], { header: 'numbers', direction: 'horizontal' })).toBe('numbers,1,2,3');
  });
  it('mixed types', ({ expect }) => {
    expect(listToCsv([1, 'b', true])).toBe('1\nb\ntrue');
  });
});

describe('tables', () => {
  interface Commodity {
    broker: string;
    commodity: string;
    dailyDealCount: number;
    ltdDealCount: number;
  }

  const r1: Commodity = { broker: 'APB Energy, Inc.', commodity: 'U.S. Nat Gas', dailyDealCount: 4, ltdDealCount: 6 };

  const r2: Commodity = { broker: 'APB Energy, Inc.', commodity: 'U.S. Power', dailyDealCount: 2, ltdDealCount: 7 };

  const headers = {
    broker: 'Broker',
    commodity: 'Commodity',
    dailyDealCount: 'Daily Deal Count',
    ltdDealCount: 'LTD Deal Count',
  };

  it('normal', ({ expect }) => {
    expect(tableToCsv([r1, r2], headers)).toBe(
      'Broker,Commodity,Daily Deal Count,LTD Deal Count\nAPB Energy, Inc.,U.S. Nat Gas,4,6\nAPB Energy, Inc.,U.S. Power,2,7',
    );
  });
  it('horizontal', ({ expect }) => {
    expect(tableToCsv([r1, r2], headers, { direction: 'horizontal' })).toBe(
      'Broker,APB Energy, Inc.,APB Energy, Inc.\nCommodity,U.S. Nat Gas,U.S. Power\nDaily Deal Count,4,2\nLTD Deal Count,6,7',
    );
  });
  it('nested', ({ expect }) => {
    interface Scoreboard {
      country: string;
      match1gf: number;
      match1ga: number;
      match2gf: number;
      match2ga: number;
      match3gf: number;
      match3ga: number;
    }

    const table = [
      {
        year: 2008,
        items: [
          { country: 'Germany', match1gf: 2, match1ga: 0, match2gf: 1, match2ga: 2, match3gf: 1, match3ga: 0 },
          { country: 'Spain', match1gf: 4, match1ga: 1, match2gf: 2, match2ga: 1, match3gf: 2, match3ga: 1 },
        ] as Scoreboard[],
      },
      {
        year: 2012,
        items: [
          { country: 'Italy', match1gf: 1, match1ga: 1, match2gf: 1, match2ga: 1, match3gf: 2, match3ga: 0 },
          { country: 'Spain', match1gf: 1, match1ga: 1, match2gf: 4, match2ga: 0, match3gf: 1, match3ga: 0 },
        ] as Scoreboard[],
      },
    ];

    const headers = {
      year: 'Year',
      country: 'Country',
      match1gf: 'Match 1 GF',
      match1ga: 'Match 1 GA',
      match2gf: 'Match 2 GF',
      match2ga: 'Match 2 GA',
      match3gf: 'Match 3 GF',
      match3ga: 'Match 3 GA',
    };
    expect(tableToCsv(table, headers, { groupKey: 'year' })).toBe(
      'Year,Country,Match 1 GF,Match 1 GA,Match 2 GF,Match 2 GA,Match 3 GF,Match 3 GA\n2008,Germany,2,0,1,2,1,0\n2008,Spain,4,1,2,1,2,1\n2012,Italy,1,1,1,1,2,0\n2012,Spain,1,1,4,0,1,0',
    );
  });
});
