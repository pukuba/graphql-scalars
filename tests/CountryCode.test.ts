import { Kind } from 'graphql/language';

import { GraphQLCountryCode } from '../src/scalars/CountryCode.js';

describe('CountryCode', () => {
  describe('valid', () => {
    const countryCodeList = [
      'AD',
      'AE',
      'AF',
      'AG',
      'AI',
      'AL',
      'AM',
      'AO',
      'AQ',
      'AR',
      'AS',
      'AT',
      'AU',
      'AW',
      'AX',
      'AZ',
      'BA',
      'BB',
      'BD',
      'BE',
      'BF',
      'BG',
      'BH',
      'BI',
      'BJ',
      'BL',
      'BM',
      'BN',
      'BO',
      'BQ',
      'BR',
      'BS',
      'BT',
      'BV',
      'BW',
      'BY',
      'BZ',
      'CA',
      'CC',
      'CD',
      'CF',
      'CG',
      'CH',
      'CI',
      'CK',
      'CL',
      'CM',
      'CN',
      'CO',
      'CR',
      'CU',
      'CV',
      'CW',
      'CX',
      'CY',
      'CZ',
      'DE',
      'DJ',
      'DK',
      'DM',
      'DO',
      'DZ',
      'EC',
      'EE',
      'EG',
      'EH',
      'ER',
      'ES',
      'ET',
      'FI',
      'FJ',
      'FK',
      'FM',
      'FO',
      'FR',
      'GA',
      'GB',
      'GD',
      'GE',
      'GF',
      'GG',
      'GH',
      'GI',
      'GL',
      'GM',
      'GN',
      'GP',
      'GQ',
      'GR',
      'GS',
      'GT',
      'GU',
      'GW',
      'GY',
      'HK',
      'HM',
      'HN',
      'HR',
      'HT',
      'HU',
      'ID',
      'IE',
      'IL',
      'IM',
      'IN',
      'IO',
      'IQ',
      'IR',
      'IS',
      'IT',
      'JE',
      'JM',
      'JO',
      'JP',
      'KE',
      'KG',
      'KH',
      'KI',
      'KM',
      'KN',
      'KP',
      'KR',
      'KW',
      'KY',
      'KZ',
      'LA',
      'LB',
      'LC',
      'LI',
      'LK',
      'LR',
      'LS',
      'LT',
      'LU',
      'LV',
      'LY',
      'MA',
      'MC',
      'MD',
      'ME',
      'MF',
      'MG',
      'MH',
      'MK',
      'ML',
      'MM',
      'MN',
      'MO',
      'MP',
      'MQ',
      'MR',
      'MS',
      'MT',
      'MU',
      'MV',
      'MW',
      'MX',
      'MY',
      'MZ',
      'NA',
      'NC',
      'NE',
      'NF',
      'NG',
      'NI',
      'NL',
      'NO',
      'NP',
      'NR',
      'NU',
      'NZ',
      'OM',
      'PA',
      'PE',
      'PF',
      'PG',
      'PH',
      'PK',
      'PL',
      'PM',
      'PN',
      'PR',
      'PS',
      'PT',
      'PW',
      'PY',
      'QA',
      'RE',
      'RO',
      'RS',
      'RU',
      'RW',
      'SA',
      'SB',
      'SC',
      'SD',
      'SE',
      'SG',
      'SH',
      'SI',
      'SJ',
      'SK',
      'SL',
      'SM',
      'SN',
      'SO',
      'SR',
      'SS',
      'ST',
      'SV',
      'SX',
      'SY',
      'SZ',
      'TC',
      'TD',
      'TF',
      'TG',
      'TH',
      'TJ',
      'TK',
      'TL',
      'TM',
      'TN',
      'TO',
      'TR',
      'TT',
      'TV',
      'TW',
      'TZ',
      'UA',
      'UG',
      'UM',
      'US',
      'UY',
      'UZ',
      'VA',
      'VC',
      'VE',
      'VG',
      'VI',
      'VN',
      'VU',
      'WF',
      'WS',
      'YE',
      'YT',
      'ZA',
      'ZM',
      'ZW',
    ];
    for (const countryCode of countryCodeList) {
      describe(`${countryCode}`, () => {
        test('serialize', () => {
          expect(GraphQLCountryCode.serialize(countryCode)).toBe(countryCode);
        });
        test('parseValue', () => {
          expect(GraphQLCountryCode.parseValue(countryCode)).toBe(countryCode);
        });
        test('parseLiteral', () => {
          expect(
            GraphQLCountryCode.parseLiteral(
              {
                value: countryCode,
                kind: Kind.STRING,
              },
              {}
            )
          ).toBe(countryCode);
        });
      });
    }
  });
  describe('invalid', () => {
    describe('not a postal code', () => {
      test('serialize', () => {
        expect(() => GraphQLCountryCode.serialize('this is not a country code')).toThrow(
          /^Value is not a valid country code/
        );
      });

      test('parseValue', () => {
        expect(() => GraphQLCountryCode.parseValue('this is not a country code')).toThrow(
          /^Value is not a valid country code/
        );
      });

      test('parseLiteral', () => {
        expect(() =>
          GraphQLCountryCode.parseLiteral({ value: 'this is not a country code', kind: Kind.STRING }, {})
        ).toThrow(/^Value is not a valid country code/);
      });
    });

    describe('not a string', () => {
      test('serialize', () => {
        expect(() => GraphQLCountryCode.serialize(123)).toThrow(/Value is not string/);
      });

      test('parseValue', () => {
        expect(() => GraphQLCountryCode.parseValue(123)).toThrow(/Value is not string/);
      });

      test('parseLiteral', () => {
        expect(() => GraphQLCountryCode.parseLiteral({ value: '123', kind: Kind.INT }, {})).toThrow(
          /Can only validate strings as country codes but got a/
        );
      });
    });
  });
});
