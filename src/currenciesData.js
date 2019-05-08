
const currenciesData = 
  [
        {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "circulating_supply": 17678575,
            "total_supply": 17678575,
            "max_supply": 21000000,
            "date_added": "2013-04-28T00:00:00.000Z",
            "num_market_pairs": 7395,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 1,
            "last_updated": "2019-05-02T16:02:30.000Z",
            "quote": {
                "USD": {
                    "price": 5513.06160121,
                    "volume_24h": 14279955714.4452,
                    "percent_change_1h": 0.304516,
                    "percent_change_24h": 2.56053,
                    "percent_change_7d": 0.236978,
                    "market_cap": 97463072996.61107,
                    "last_updated": "2019-05-02T16:02:30.000Z"
                }
            }
        },
        {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "circulating_supply": 105902572.7491,
            "total_supply": 105902572.7491,
            "max_supply": null,
            "date_added": "2015-08-07T00:00:00.000Z",
            "num_market_pairs": 5268,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 2,
            "last_updated": "2019-05-02T16:02:24.000Z",
            "quote": {
                "USD": {
                    "price": 161.82646305,
                    "volume_24h": 5750876638.20509,
                    "percent_change_1h": 0.305531,
                    "percent_change_24h": 0.521202,
                    "percent_change_7d": -1.92314,
                    "market_cap": 17137838775.882168,
                    "last_updated": "2019-05-02T16:02:24.000Z"
                }
            }
        },
        {
            "id": 52,
            "name": "XRP",
            "symbol": "XRP",
            "slug": "ripple",
            "circulating_supply": 42004966728,
            "total_supply": 99991643723,
            "max_supply": 100000000000,
            "date_added": "2013-08-04T00:00:00.000Z",
            "num_market_pairs": 389,
            "tags": [],
            "platform": null,
            "cmc_rank": 3,
            "last_updated": "2019-05-02T16:03:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.304484989527,
                    "volume_24h": 878500158.871789,
                    "percent_change_1h": 0.412947,
                    "percent_change_24h": -0.100492,
                    "percent_change_7d": 0.42874,
                    "market_cap": 12789881854.257063,
                    "last_updated": "2019-05-02T16:03:02.000Z"
                }
            }
        },
        {
            "id": 1831,
            "name": "Bitcoin Cash",
            "symbol": "BCH",
            "slug": "bitcoin-cash",
            "circulating_supply": 17760250,
            "total_supply": 17760250,
            "max_supply": 21000000,
            "date_added": "2017-07-23T00:00:00.000Z",
            "num_market_pairs": 316,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 4,
            "last_updated": "2019-05-02T16:03:05.000Z",
            "quote": {
                "USD": {
                    "price": 274.009964045,
                    "volume_24h": 1523834136.44354,
                    "percent_change_1h": -0.372965,
                    "percent_change_24h": 1.71577,
                    "percent_change_7d": -2.83446,
                    "market_cap": 4866485463.930211,
                    "last_updated": "2019-05-02T16:03:05.000Z"
                }
            }
        },
        {
            "id": 2,
            "name": "Litecoin",
            "symbol": "LTC",
            "slug": "litecoin",
            "circulating_supply": 61597632.6205068,
            "total_supply": 61597632.6205068,
            "max_supply": 84000000,
            "date_added": "2013-04-28T00:00:00.000Z",
            "num_market_pairs": 548,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 5,
            "last_updated": "2019-05-02T16:03:04.000Z",
            "quote": {
                "USD": {
                    "price": 73.8376923605,
                    "volume_24h": 2796341109.06776,
                    "percent_change_1h": 0.259368,
                    "percent_change_24h": 0.708241,
                    "percent_change_7d": -0.330554,
                    "market_cap": 4548227047.568081,
                    "last_updated": "2019-05-02T16:03:04.000Z"
                }
            }
        },
        {
            "id": 1765,
            "name": "EOS",
            "symbol": "EOS",
            "slug": "eos",
            "circulating_supply": 944106801.389,
            "total_supply": 1044106805.0541,
            "max_supply": null,
            "date_added": "2017-07-01T00:00:00.000Z",
            "num_market_pairs": 308,
            "tags": [],
            "platform": null,
            "cmc_rank": 6,
            "last_updated": "2019-05-02T16:03:04.000Z",
            "quote": {
                "USD": {
                    "price": 4.7437060584,
                    "volume_24h": 1681738331.94286,
                    "percent_change_1h": 0.116269,
                    "percent_change_24h": -0.275301,
                    "percent_change_7d": -1.17176,
                    "market_cap": 4478565153.525645,
                    "last_updated": "2019-05-02T16:03:04.000Z"
                }
            }
        },
        {
            "id": 1839,
            "name": "Binance Coin",
            "symbol": "BNB",
            "slug": "binance-coin",
            "circulating_supply": 141175490.242,
            "total_supply": 189175490.242,
            "max_supply": null,
            "date_added": "2017-07-25T00:00:00.000Z",
            "num_market_pairs": 145,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
            },
            "cmc_rank": 7,
            "last_updated": "2019-05-02T16:03:04.000Z",
            "quote": {
                "USD": {
                    "price": 23.6686338443,
                    "volume_24h": 247933762.295209,
                    "percent_change_1h": -0.382666,
                    "percent_change_24h": 8.74797,
                    "percent_change_7d": 3.06707,
                    "market_cap": 3341430986.327446,
                    "last_updated": "2019-05-02T16:03:04.000Z"
                }
            }
        },
        {
            "id": 825,
            "name": "Tether",
            "symbol": "USDT",
            "slug": "tether",
            "circulating_supply": 2794138379.99801,
            "total_supply": 3220057493.36343,
            "max_supply": null,
            "date_added": "2015-02-25T00:00:00.000Z",
            "num_market_pairs": 2238,
            "tags": [],
            "platform": {
                "id": 83,
                "name": "Omni",
                "symbol": "OMNI",
                "slug": "omni",
                "token_address": "31"
            },
            "cmc_rank": 8,
            "last_updated": "2019-05-02T16:02:12.000Z",
            "quote": {
                "USD": {
                    "price": 0.999987101342,
                    "volume_24h": 11830721052.1167,
                    "percent_change_1h": -0.041424,
                    "percent_change_24h": -0.324191,
                    "percent_change_7d": -0.70817,
                    "market_cap": 2794102339.362642,
                    "last_updated": "2019-05-02T16:02:12.000Z"
                }
            }
        },
        {
            "id": 512,
            "name": "Stellar",
            "symbol": "XLM",
            "slug": "stellar",
            "circulating_supply": 19102810841.936,
            "total_supply": 104942387316.79,
            "max_supply": null,
            "date_added": "2014-08-05T00:00:00.000Z",
            "num_market_pairs": 253,
            "tags": [],
            "platform": null,
            "cmc_rank": 9,
            "last_updated": "2019-05-02T16:03:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.101036469622,
                    "volume_24h": 194506915.45378,
                    "percent_change_1h": 0.192461,
                    "percent_change_24h": -0.436876,
                    "percent_change_7d": -3.64088,
                    "market_cap": 1930080567.326079,
                    "last_updated": "2019-05-02T16:03:02.000Z"
                }
            }
        },
        {
            "id": 2010,
            "name": "Cardano",
            "symbol": "ADA",
            "slug": "cardano",
            "circulating_supply": 25927070538,
            "total_supply": 31112483745,
            "max_supply": 45000000000,
            "date_added": "2017-10-01T00:00:00.000Z",
            "num_market_pairs": 80,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 10,
            "last_updated": "2019-05-02T16:03:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.0694295885204,
                    "volume_24h": 54256593.3199695,
                    "percent_change_1h": 0.885827,
                    "percent_change_24h": 1.52629,
                    "percent_change_7d": -6.10594,
                    "market_cap": 1800105838.9927258,
                    "last_updated": "2019-05-02T16:03:04.000Z"
                }
            }
        },
        {
            "id": 1958,
            "name": "TRON",
            "symbol": "TRX",
            "slug": "tron",
            "circulating_supply": 66682072191.4,
            "total_supply": 99281283754.3,
            "max_supply": null,
            "date_added": "2017-09-13T00:00:00.000Z",
            "num_market_pairs": 221,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 11,
            "last_updated": "2019-05-02T16:03:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.023778774619,
                    "volume_24h": 655896490.193893,
                    "percent_change_1h": 0.257164,
                    "percent_change_24h": 0.771947,
                    "percent_change_7d": -2.98973,
                    "market_cap": 1585617965.767188,
                    "last_updated": "2019-05-02T16:03:05.000Z"
                }
            }
        },
        {
            "id": 328,
            "name": "Monero",
            "symbol": "XMR",
            "slug": "monero",
            "circulating_supply": 16955826.824734,
            "total_supply": 16955826.824734,
            "max_supply": null,
            "date_added": "2014-05-21T00:00:00.000Z",
            "num_market_pairs": 127,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 12,
            "last_updated": "2019-05-02T16:03:02.000Z",
            "quote": {
                "USD": {
                    "price": 63.9161437006,
                    "volume_24h": 45026312.8657913,
                    "percent_change_1h": -0.527586,
                    "percent_change_24h": 0.798708,
                    "percent_change_7d": -4.80894,
                    "market_cap": 1083751063.8921864,
                    "last_updated": "2019-05-02T16:03:02.000Z"
                }
            }
        },
        {
            "id": 131,
            "name": "Dash",
            "symbol": "DASH",
            "slug": "dash",
            "circulating_supply": 8786242.64976016,
            "total_supply": 8786242.64976016,
            "max_supply": 18900000,
            "date_added": "2014-02-14T00:00:00.000Z",
            "num_market_pairs": 226,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 13,
            "last_updated": "2019-05-02T16:03:02.000Z",
            "quote": {
                "USD": {
                    "price": 118.864097634,
                    "volume_24h": 266839734.014029,
                    "percent_change_1h": 0.906968,
                    "percent_change_24h": 1.36763,
                    "percent_change_7d": 0.701955,
                    "market_cap": 1044368804.1571066,
                    "last_updated": "2019-05-02T16:03:02.000Z"
                }
            }
        },
        {
            "id": 3602,
            "name": "Bitcoin SV",
            "symbol": "BSV",
            "slug": "bitcoin-sv",
            "circulating_supply": 17758110.9121145,
            "total_supply": 17758110.9121145,
            "max_supply": 21000000,
            "date_added": "2018-11-09T00:00:00.000Z",
            "num_market_pairs": 128,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 14,
            "last_updated": "2019-05-02T16:02:11.000Z",
            "quote": {
                "USD": {
                    "price": 53.3384397476,
                    "volume_24h": 94656021.5883758,
                    "percent_change_1h": -0.379734,
                    "percent_change_24h": -0.191447,
                    "percent_change_7d": 1.28567,
                    "market_cap": 947189928.9170173,
                    "last_updated": "2019-05-02T16:02:11.000Z"
                }
            }
        },
        {
            "id": 3794,
            "name": "Cosmos",
            "symbol": "ATOM",
            "slug": "cosmos",
            "circulating_supply": 190688439.2,
            "total_supply": 237928230.821588,
            "max_supply": null,
            "date_added": "2019-03-14T00:00:00.000Z",
            "num_market_pairs": 47,
            "tags": [],
            "platform": null,
            "cmc_rank": 15,
            "last_updated": "2019-05-02T16:03:10.000Z",
            "quote": {
                "USD": {
                    "price": 4.45852123381,
                    "volume_24h": 86984018.3622005,
                    "percent_change_1h": 0.192445,
                    "percent_change_24h": -1.25556,
                    "percent_change_7d": 29.2318,
                    "market_cap": 850188455.2152871,
                    "last_updated": "2019-05-02T16:03:10.000Z"
                }
            }
        },
        {
            "id": 1720,
            "name": "IOTA",
            "symbol": "MIOTA",
            "slug": "iota",
            "circulating_supply": 2779530283,
            "total_supply": 2779530283,
            "max_supply": 2779530283,
            "date_added": "2017-06-13T00:00:00.000Z",
            "num_market_pairs": 37,
            "tags": [],
            "platform": null,
            "cmc_rank": 16,
            "last_updated": "2019-05-02T16:03:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.295718734245,
                    "volume_24h": 21255773.3030978,
                    "percent_change_1h": -0.291389,
                    "percent_change_24h": -0.0302065,
                    "percent_change_7d": 4.60239,
                    "market_cap": 821959177.0844066,
                    "last_updated": "2019-05-02T16:03:03.000Z"
                }
            }
        },
        {
            "id": 2011,
            "name": "Tezos",
            "symbol": "XTZ",
            "slug": "tezos",
            "circulating_supply": 662398233.698429,
            "total_supply": 792719456.205422,
            "max_supply": null,
            "date_added": "2017-10-02T00:00:00.000Z",
            "num_market_pairs": 27,
            "tags": [],
            "platform": null,
            "cmc_rank": 17,
            "last_updated": "2019-05-02T16:03:04.000Z",
            "quote": {
                "USD": {
                    "price": 1.23789922618,
                    "volume_24h": 4489106.81017178,
                    "percent_change_1h": 0.523193,
                    "percent_change_24h": 2.21986,
                    "percent_change_7d": 1.82424,
                    "market_cap": 819982260.9182839,
                    "last_updated": "2019-05-02T16:03:04.000Z"
                }
            }
        },
        {
            "id": 1376,
            "name": "NEO",
            "symbol": "NEO",
            "slug": "neo",
            "circulating_supply": 65000000,
            "total_supply": 100000000,
            "max_supply": 100000000,
            "date_added": "2016-09-08T00:00:00.000Z",
            "num_market_pairs": 175,
            "tags": [],
            "platform": null,
            "cmc_rank": 18,
            "last_updated": "2019-05-02T16:03:03.000Z",
            "quote": {
                "USD": {
                    "price": 10.048723013,
                    "volume_24h": 278569457.282247,
                    "percent_change_1h": 1.71514,
                    "percent_change_24h": 4.19113,
                    "percent_change_7d": -1.39506,
                    "market_cap": 653166995.845,
                    "last_updated": "2019-05-02T16:03:03.000Z"
                }
            }
        },
        {
            "id": 1321,
            "name": "Ethereum Classic",
            "symbol": "ETC",
            "slug": "ethereum-classic",
            "circulating_supply": 110157317,
            "total_supply": 110157317,
            "max_supply": 210000000,
            "date_added": "2016-07-24T00:00:00.000Z",
            "num_market_pairs": 194,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 19,
            "last_updated": "2019-05-02T16:03:03.000Z",
            "quote": {
                "USD": {
                    "price": 5.82292280662,
                    "volume_24h": 417873892.756648,
                    "percent_change_1h": 0.375455,
                    "percent_change_24h": -0.235458,
                    "percent_change_7d": 3.52115,
                    "market_cap": 641437553.4753691,
                    "last_updated": "2019-05-02T16:03:03.000Z"
                }
            }
        },
        {
            "id": 2566,
            "name": "Ontology",
            "symbol": "ONT",
            "slug": "ontology",
            "circulating_supply": 494804358,
            "total_supply": 1000000000,
            "max_supply": null,
            "date_added": "2018-03-08T00:00:00.000Z",
            "num_market_pairs": 70,
            "tags": [],
            "platform": null,
            "cmc_rank": 20,
            "last_updated": "2019-05-02T16:03:07.000Z",
            "quote": {
                "USD": {
                    "price": 1.1132950206,
                    "volume_24h": 59094453.6003746,
                    "percent_change_1h": 0.827092,
                    "percent_change_24h": 0.181287,
                    "percent_change_7d": 1.25322,
                    "market_cap": 550863227.9325798,
                    "last_updated": "2019-05-02T16:03:07.000Z"
                }
            }
        },
        {
            "id": 1518,
            "name": "Maker",
            "symbol": "MKR",
            "slug": "maker",
            "circulating_supply": 1000000,
            "total_supply": 1000000,
            "max_supply": null,
            "date_added": "2017-01-29T00:00:00.000Z",
            "num_market_pairs": 62,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
            },
            "cmc_rank": 21,
            "last_updated": "2019-05-02T16:03:03.000Z",
            "quote": {
                "USD": {
                    "price": 545.860803968,
                    "volume_24h": 2097118.64646703,
                    "percent_change_1h": -0.0231404,
                    "percent_change_24h": 2.93403,
                    "percent_change_7d": -1.2252,
                    "market_cap": 545860803.968,
                    "last_updated": "2019-05-02T16:03:03.000Z"
                }
            }
        },
        {
            "id": 873,
            "name": "NEM",
            "symbol": "XEM",
            "slug": "nem",
            "circulating_supply": 8999999999,
            "total_supply": 8999999999,
            "max_supply": null,
            "date_added": "2015-04-01T00:00:00.000Z",
            "num_market_pairs": 92,
            "tags": [],
            "platform": null,
            "cmc_rank": 22,
            "last_updated": "2019-05-02T16:03:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.0563425880487,
                    "volume_24h": 12137808.2207782,
                    "percent_change_1h": 0.0780988,
                    "percent_change_24h": 1.13004,
                    "percent_change_7d": -7.5374,
                    "market_cap": 507083292.3819574,
                    "last_updated": "2019-05-02T16:03:02.000Z"
                }
            }
        },
        {
            "id": 1697,
            "name": "Basic Attention Token",
            "symbol": "BAT",
            "slug": "basic-attention-token",
            "circulating_supply": 1259998400.9363,
            "total_supply": 1500000000,
            "max_supply": null,
            "date_added": "2017-06-01T00:00:00.000Z",
            "num_market_pairs": 101,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
            },
            "cmc_rank": 23,
            "last_updated": "2019-05-02T16:03:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.381924279339,
                    "volume_24h": 40663441.0164669,
                    "percent_change_1h": 0.593893,
                    "percent_change_24h": -2.16711,
                    "percent_change_7d": -10.0745,
                    "market_cap": 481223981.24588877,
                    "last_updated": "2019-05-02T16:03:03.000Z"
                }
            }
        },
        {
            "id": 3635,
            "name": "Crypto.com Chain",
            "symbol": "CRO",
            "slug": "crypto-com-chain",
            "circulating_supply": 5463470319.6347,
            "total_supply": 100000000000,
            "max_supply": null,
            "date_added": "2018-12-14T00:00:00.000Z",
            "num_market_pairs": 13,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
            },
            "cmc_rank": 24,
            "last_updated": "2019-05-02T16:03:10.000Z",
            "quote": {
                "USD": {
                    "price": 0.0752764629379,
                    "volume_24h": 493112.655607396,
                    "percent_change_1h": 0.358352,
                    "percent_change_24h": 2.14448,
                    "percent_change_7d": 1.01891,
                    "market_cap": 411270721.02829814,
                    "last_updated": "2019-05-02T16:03:10.000Z"
                }
            }
        },
        {
            "id": 1437,
            "name": "Zcash",
            "symbol": "ZEC",
            "slug": "zcash",
            "circulating_supply": 6445031.25,
            "total_supply": 6445031.25,
            "max_supply": null,
            "date_added": "2016-10-29T00:00:00.000Z",
            "num_market_pairs": 181,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 25,
            "last_updated": "2019-05-02T16:03:03.000Z",
            "quote": {
                "USD": {
                    "price": 60.2880227749,
                    "volume_24h": 184156314.659222,
                    "percent_change_1h": 0.258417,
                    "percent_change_24h": -0.522825,
                    "percent_change_7d": -7.69697,
                    "market_cap": 388558190.7849422,
                    "last_updated": "2019-05-02T16:03:03.000Z"
                }
            }
        },
        {
            "id": 3077,
            "name": "VeChain",
            "symbol": "VET",
            "slug": "vechain",
            "circulating_supply": 55454734800,
            "total_supply": 86712634466,
            "max_supply": null,
            "date_added": "2017-08-22T00:00:00.000Z",
            "num_market_pairs": 56,
            "tags": [],
            "platform": null,
            "cmc_rank": 26,
            "last_updated": "2019-05-02T16:03:09.000Z",
            "quote": {
                "USD": {
                    "price": 0.00659739406041,
                    "volume_24h": 11620438.8545144,
                    "percent_change_1h": 0.114674,
                    "percent_change_24h": 1.84743,
                    "percent_change_7d": 2.26635,
                    "market_cap": 365856737.9911317,
                    "last_updated": "2019-05-02T16:03:09.000Z"
                }
            }
        },
        {
            "id": 74,
            "name": "Dogecoin",
            "symbol": "DOGE",
            "slug": "dogecoin",
            "circulating_supply": 119336578062.503,
            "total_supply": 119336578062.503,
            "max_supply": null,
            "date_added": "2013-12-15T00:00:00.000Z",
            "num_market_pairs": 327,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 27,
            "last_updated": "2019-05-02T16:03:02.000Z",
            "quote": {
                "USD": {
                    "price": 0.00260312323369,
                    "volume_24h": 34634078.5036292,
                    "percent_change_1h": 0.279415,
                    "percent_change_24h": 3.72202,
                    "percent_change_7d": 0.498152,
                    "market_cap": 310647818.98356193,
                    "last_updated": "2019-05-02T16:03:02.000Z"
                }
            }
        },
        {
            "id": 3408,
            "name": "USD Coin",
            "symbol": "USDC",
            "slug": "usd-coin",
            "circulating_supply": 293672081.295188,
            "total_supply": 294347208.48,
            "max_supply": null,
            "date_added": "2018-10-08T00:00:00.000Z",
            "num_market_pairs": 141,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            },
            "cmc_rank": 28,
            "last_updated": "2019-05-02T16:02:10.000Z",
            "quote": {
                "USD": {
                    "price": 1.01623105062,
                    "volume_24h": 77437862.1840323,
                    "percent_change_1h": -0.0359879,
                    "percent_change_24h": 0.390243,
                    "percent_change_7d": 1.64334,
                    "market_cap": 298438687.712371,
                    "last_updated": "2019-05-02T16:02:10.000Z"
                }
            }
        },
        {
            "id": 2083,
            "name": "Bitcoin Gold",
            "symbol": "BTG",
            "slug": "bitcoin-gold",
            "circulating_supply": 17513923.589,
            "total_supply": 17513923.589,
            "max_supply": 21000000,
            "date_added": "2017-10-23T00:00:00.000Z",
            "num_market_pairs": 75,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 29,
            "last_updated": "2019-05-02T16:03:05.000Z",
            "quote": {
                "USD": {
                    "price": 16.9121592649,
                    "volume_24h": 14828654.2239014,
                    "percent_change_1h": 0.373659,
                    "percent_change_24h": 1.51939,
                    "percent_change_7d": 5.91806,
                    "market_cap": 296198265.0904571,
                    "last_updated": "2019-05-02T16:03:05.000Z"
                }
            }
        },
        {
            "id": 1168,
            "name": "Decred",
            "symbol": "DCR",
            "slug": "decred",
            "circulating_supply": 9716745.87981031,
            "total_supply": 9716745.87981031,
            "max_supply": 21000000,
            "date_added": "2016-02-10T00:00:00.000Z",
            "num_market_pairs": 35,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 30,
            "last_updated": "2019-05-02T16:03:02.000Z",
            "quote": {
                "USD": {
                    "price": 24.7468290596,
                    "volume_24h": 1624265.61734309,
                    "percent_change_1h": 0.707136,
                    "percent_change_24h": 3.88334,
                    "percent_change_7d": 1.43818,
                    "market_cap": 240458649.30323836,
                    "last_updated": "2019-05-02T16:03:02.000Z"
                }
            }
        },
        {
            "id": 1684,
            "name": "Qtum",
            "symbol": "QTUM",
            "slug": "qtum",
            "circulating_supply": 89440312,
            "total_supply": 101440312,
            "max_supply": 107822406,
            "date_added": "2017-05-24T00:00:00.000Z",
            "num_market_pairs": 146,
            "tags": [],
            "platform": null,
            "cmc_rank": 31,
            "last_updated": "2019-05-02T16:03:03.000Z",
            "quote": {
                "USD": {
                    "price": 2.61661087706,
                    "volume_24h": 248021229.439646,
                    "percent_change_1h": 0.193914,
                    "percent_change_24h": 7.23569,
                    "percent_change_7d": 4.26408,
                    "market_cap": 234030493.22684002,
                    "last_updated": "2019-05-02T16:03:03.000Z"
                }
            }
        },
        {
            "id": 1808,
            "name": "OmiseGO",
            "symbol": "OMG",
            "slug": "omisego",
            "circulating_supply": 140245398.245133,
            "total_supply": 140245398.245133,
            "max_supply": null,
            "date_added": "2017-07-14T00:00:00.000Z",
            "num_market_pairs": 166,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
            },
            "cmc_rank": 32,
            "last_updated": "2019-05-02T16:03:04.000Z",
            "quote": {
                "USD": {
                    "price": 1.64578692894,
                    "volume_24h": 53338127.0802322,
                    "percent_change_1h": 0.154792,
                    "percent_change_24h": 3.58164,
                    "percent_change_7d": -1.47369,
                    "market_cap": 230814043.27582473,
                    "last_updated": "2019-05-02T16:03:04.000Z"
                }
            }
        },
        {
            "id": 1104,
            "name": "Augur",
            "symbol": "REP",
            "slug": "augur",
            "circulating_supply": 11000000,
            "total_supply": 11000000,
            "max_supply": null,
            "date_added": "2015-10-27T00:00:00.000Z",
            "num_market_pairs": 67,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x1985365e9f78359a9b6ad760e32412f4a445e862"
            },
            "cmc_rank": 33,
            "last_updated": "2019-05-02T16:03:02.000Z",
            "quote": {
                "USD": {
                    "price": 20.664439507,
                    "volume_24h": 9231207.57239143,
                    "percent_change_1h": -0.0440922,
                    "percent_change_24h": 1.29546,
                    "percent_change_7d": -7.89688,
                    "market_cap": 227308834.57700002,
                    "last_updated": "2019-05-02T16:03:02.000Z"
                }
            }
        },
        {
            "id": 2563,
            "name": "TrueUSD",
            "symbol": "TUSD",
            "slug": "trueusd",
            "circulating_supply": 213159998.26,
            "total_supply": 213159998.26,
            "max_supply": null,
            "date_added": "2018-03-06T00:00:00.000Z",
            "num_market_pairs": 162,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x0000000000085d4780B73119b644AE5ecd22b376"
            },
            "cmc_rank": 34,
            "last_updated": "2019-05-02T16:03:07.000Z",
            "quote": {
                "USD": {
                    "price": 1.02525835928,
                    "volume_24h": 97110008.4695723,
                    "percent_change_1h": -0.00384898,
                    "percent_change_24h": 0.259594,
                    "percent_change_7d": 1.36345,
                    "market_cap": 218544070.08017525,
                    "last_updated": "2019-05-02T16:03:07.000Z"
                }
            }
        },
        {
            "id": 1274,
            "name": "Waves",
            "symbol": "WAVES",
            "slug": "waves",
            "circulating_supply": 100000000,
            "total_supply": 100000000,
            "max_supply": null,
            "date_added": "2016-06-02T00:00:00.000Z",
            "num_market_pairs": 130,
            "tags": [],
            "platform": null,
            "cmc_rank": 35,
            "last_updated": "2019-05-02T16:03:03.000Z",
            "quote": {
                "USD": {
                    "price": 2.16977489632,
                    "volume_24h": 12134161.7551216,
                    "percent_change_1h": 0.137762,
                    "percent_change_24h": -0.453421,
                    "percent_change_7d": -10.0702,
                    "market_cap": 216977489.632,
                    "last_updated": "2019-05-02T16:03:03.000Z"
                }
            }
        },
        {
            "id": 1214,
            "name": "Lisk",
            "symbol": "LSK",
            "slug": "lisk",
            "circulating_supply": 116607541.821928,
            "total_supply": 131722672,
            "max_supply": null,
            "date_added": "2016-04-06T00:00:00.000Z",
            "num_market_pairs": 58,
            "tags": [],
            "platform": null,
            "cmc_rank": 36,
            "last_updated": "2019-05-02T16:03:02.000Z",
            "quote": {
                "USD": {
                    "price": 1.7410984026,
                    "volume_24h": 3537957.49961429,
                    "percent_change_1h": 0.0834163,
                    "percent_change_24h": -0.763246,
                    "percent_change_7d": -7.10366,
                    "market_cap": 203025204.79727152,
                    "last_updated": "2019-05-02T16:03:02.000Z"
                }
            }
        },
        {
            "id": 1567,
            "name": "Nano",
            "symbol": "NANO",
            "slug": "nano",
            "circulating_supply": 133248289.1965,
            "total_supply": 133248289.1965,
            "max_supply": 133248290,
            "date_added": "2017-03-06T00:00:00.000Z",
            "num_market_pairs": 39,
            "tags": [],
            "platform": null,
            "cmc_rank": 37,
            "last_updated": "2019-05-02T16:03:03.000Z",
            "quote": {
                "USD": {
                    "price": 1.50558976227,
                    "volume_24h": 3778522.38731545,
                    "percent_change_1h": 0.793432,
                    "percent_change_24h": 0.739789,
                    "percent_change_7d": -15.8828,
                    "market_cap": 200617260.05424267,
                    "last_updated": "2019-05-02T16:03:03.000Z"
                }
            }
        },
        {
            "id": 2577,
            "name": "Ravencoin",
            "symbol": "RVN",
            "slug": "ravencoin",
            "circulating_supply": 3451240000,
            "total_supply": 3451240000,
            "max_supply": 21000000000,
            "date_added": "2018-03-10T00:00:00.000Z",
            "num_market_pairs": 32,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 38,
            "last_updated": "2019-05-02T16:03:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.0505096105212,
                    "volume_24h": 11501258.9528165,
                    "percent_change_1h": 0.856735,
                    "percent_change_24h": -4.50984,
                    "percent_change_7d": -11.6923,
                    "market_cap": 174320788.2151863,
                    "last_updated": "2019-05-02T16:03:07.000Z"
                }
            }
        },
        {
            "id": 2222,
            "name": "Bitcoin Diamond",
            "symbol": "BCD",
            "slug": "bitcoin-diamond",
            "circulating_supply": 186492897.953,
            "total_supply": 189492897.953,
            "max_supply": 210000000,
            "date_added": "2017-11-24T00:00:00.000Z",
            "num_market_pairs": 22,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 39,
            "last_updated": "2019-05-02T16:03:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.926834261318,
                    "volume_24h": 2132891.69418622,
                    "percent_change_1h": 0.469609,
                    "percent_change_24h": 1.58829,
                    "percent_change_7d": -9.48784,
                    "market_cap": 172848007.31532192,
                    "last_updated": "2019-05-02T16:03:05.000Z"
                }
            }
        },
        {
            "id": 2682,
            "name": "Holo",
            "symbol": "HOT",
            "slug": "holo",
            "circulating_supply": 133214575156,
            "total_supply": 177619433541.141,
            "max_supply": null,
            "date_added": "2018-04-29T00:00:00.000Z",
            "num_market_pairs": 45,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2"
            },
            "cmc_rank": 40,
            "last_updated": "2019-05-02T16:03:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.00128578092347,
                    "volume_24h": 8897608.99948396,
                    "percent_change_1h": 0.177264,
                    "percent_change_24h": 0.293085,
                    "percent_change_7d": -1.18388,
                    "market_cap": 171284759.4637454,
                    "last_updated": "2019-05-02T16:03:07.000Z"
                }
            }
        },
        {
            "id": 372,
            "name": "Bytecoin",
            "symbol": "BCN",
            "slug": "bytecoin-bcn",
            "circulating_supply": 184066828814.059,
            "total_supply": 184066828814.059,
            "max_supply": 184470000000,
            "date_added": "2014-06-17T00:00:00.000Z",
            "num_market_pairs": 12,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 41,
            "last_updated": "2019-05-02T16:03:01.000Z",
            "quote": {
                "USD": {
                    "price": 0.000926378351689,
                    "volume_24h": 245723.987913112,
                    "percent_change_1h": 0.281081,
                    "percent_change_24h": 2.18056,
                    "percent_change_7d": 1.56463,
                    "market_cap": 170515525.4773893,
                    "last_updated": "2019-05-02T16:03:01.000Z"
                }
            }
        },
        {
            "id": 3330,
            "name": "Paxos Standard Token",
            "symbol": "PAX",
            "slug": "paxos-standard-token",
            "circulating_supply": 162626845.891435,
            "total_supply": 162694230.96,
            "max_supply": null,
            "date_added": "2018-09-27T00:00:00.000Z",
            "num_market_pairs": 82,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
            },
            "cmc_rank": 42,
            "last_updated": "2019-05-02T16:03:09.000Z",
            "quote": {
                "USD": {
                    "price": 1.01805563814,
                    "volume_24h": 106814362.215179,
                    "percent_change_1h": 0.0356835,
                    "percent_change_24h": 0.531502,
                    "percent_change_7d": 1.66128,
                    "market_cap": 165563177.3727003,
                    "last_updated": "2019-05-02T16:03:09.000Z"
                }
            }
        },
        {
            "id": 1975,
            "name": "Chainlink",
            "symbol": "LINK",
            "slug": "chainlink",
            "circulating_supply": 350000000,
            "total_supply": 1000000000,
            "max_supply": null,
            "date_added": "2017-09-20T00:00:00.000Z",
            "num_market_pairs": 49,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca"
            },
            "cmc_rank": 43,
            "last_updated": "2019-05-02T16:03:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.466766204789,
                    "volume_24h": 3644180.31619336,
                    "percent_change_1h": 0.102381,
                    "percent_change_24h": -1.37667,
                    "percent_change_7d": -4.00866,
                    "market_cap": 163368171.67615,
                    "last_updated": "2019-05-02T16:03:04.000Z"
                }
            }
        },
        {
            "id": 1896,
            "name": "0x",
            "symbol": "ZRX",
            "slug": "0x",
            "circulating_supply": 587710996.56836,
            "total_supply": 1000000000,
            "max_supply": null,
            "date_added": "2017-08-16T00:00:00.000Z",
            "num_market_pairs": 155,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xe41d2489571d322189246dafa5ebde1f4699f498"
            },
            "cmc_rank": 44,
            "last_updated": "2019-05-02T16:03:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.276572466511,
                    "volume_24h": 19057293.8629815,
                    "percent_change_1h": -0.235773,
                    "percent_change_24h": -0.878954,
                    "percent_change_7d": -3.58194,
                    "market_cap": 162544679.91654918,
                    "last_updated": "2019-05-02T16:03:04.000Z"
                }
            }
        },
        {
            "id": 2099,
            "name": "ICON",
            "symbol": "ICX",
            "slug": "icon",
            "circulating_supply": 473406687.603972,
            "total_supply": 800460000,
            "max_supply": null,
            "date_added": "2017-10-27T00:00:00.000Z",
            "num_market_pairs": 51,
            "tags": [],
            "platform": null,
            "cmc_rank": 45,
            "last_updated": "2019-05-02T16:03:05.000Z",
            "quote": {
                "USD": {
                    "price": 0.336831765589,
                    "volume_24h": 7809278.62514211,
                    "percent_change_1h": -0.724055,
                    "percent_change_24h": 0.78607,
                    "percent_change_7d": -12.5664,
                    "market_cap": 159458410.42728606,
                    "last_updated": "2019-05-02T16:03:05.000Z"
                }
            }
        },
        {
            "id": 2469,
            "name": "Zilliqa",
            "symbol": "ZIL",
            "slug": "zilliqa",
            "circulating_supply": 8687360058.0875,
            "total_supply": 12533042434.6081,
            "max_supply": null,
            "date_added": "2018-01-25T00:00:00.000Z",
            "num_market_pairs": 101,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27"
            },
            "cmc_rank": 46,
            "last_updated": "2019-05-02T16:03:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.0171904163493,
                    "volume_24h": 8343266.06517108,
                    "percent_change_1h": -0.417356,
                    "percent_change_24h": -1.49083,
                    "percent_change_7d": -8.78221,
                    "market_cap": 149339336.37480313,
                    "last_updated": "2019-05-02T16:03:07.000Z"
                }
            }
        },
        {
            "id": 463,
            "name": "BitShares",
            "symbol": "BTS",
            "slug": "bitshares",
            "circulating_supply": 2713280000,
            "total_supply": 2713280000,
            "max_supply": 3600570502,
            "date_added": "2014-07-21T00:00:00.000Z",
            "num_market_pairs": 86,
            "tags": [],
            "platform": null,
            "cmc_rank": 47,
            "last_updated": "2019-05-02T16:03:01.000Z",
            "quote": {
                "USD": {
                    "price": 0.053995288737,
                    "volume_24h": 5866488.12204107,
                    "percent_change_1h": 1.43718,
                    "percent_change_24h": 2.41045,
                    "percent_change_7d": -1.36254,
                    "market_cap": 146504337.02432737,
                    "last_updated": "2019-05-02T16:03:01.000Z"
                }
            }
        },
        {
            "id": 3718,
            "name": "BitTorrent",
            "symbol": "BTT",
            "slug": "bittorrent",
            "circulating_supply": 212116500000,
            "total_supply": 990000000000,
            "max_supply": null,
            "date_added": "2019-01-31T00:00:00.000Z",
            "num_market_pairs": 90,
            "tags": [],
            "platform": {
                "id": 1958,
                "name": "TRON",
                "symbol": "TRX",
                "slug": "tron",
                "token_address": "1002000"
            },
            "cmc_rank": 48,
            "last_updated": "2019-05-02T16:02:11.000Z",
            "quote": {
                "USD": {
                    "price": 0.00065898974924,
                    "volume_24h": 44944807.4080048,
                    "percent_change_1h": -1.58778,
                    "percent_change_24h": 2.02379,
                    "percent_change_7d": -3.11315,
                    "market_cap": 139782599.14466646,
                    "last_updated": "2019-05-02T16:02:11.000Z"
                }
            }
        },
        {
            "id": 2405,
            "name": "IOST",
            "symbol": "IOST",
            "slug": "iostoken",
            "circulating_supply": 12013965608.8475,
            "total_supply": 21000000000,
            "max_supply": null,
            "date_added": "2018-01-16T00:00:00.000Z",
            "num_market_pairs": 65,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab"
            },
            "cmc_rank": 49,
            "last_updated": "2019-05-02T16:03:06.000Z",
            "quote": {
                "USD": {
                    "price": 0.0115640885327,
                    "volume_24h": 12481975.8389975,
                    "percent_change_1h": 0.176679,
                    "percent_change_24h": 1.44865,
                    "percent_change_7d": 2.07968,
                    "market_cap": 138930561.92952555,
                    "last_updated": "2019-05-02T16:03:06.000Z"
                }
            }
        },
        {
            "id": 2603,
            "name": "Pundi X",
            "symbol": "NPXS",
            "slug": "pundi-x",
            "circulating_supply": 195053096087.921,
            "total_supply": 274555193861,
            "max_supply": null,
            "date_added": "2018-03-22T00:00:00.000Z",
            "num_market_pairs": 56,
            "tags": [],
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3"
            },
            "cmc_rank": 50,
            "last_updated": "2019-05-02T16:03:07.000Z",
            "quote": {
                "USD": {
                    "price": 0.00064928588296,
                    "volume_24h": 2696360.71815035,
                    "percent_change_1h": 0.411134,
                    "percent_change_24h": -0.252987,
                    "percent_change_7d": -2.65554,
                    "market_cap": 126645221.71752751,
                    "last_updated": "2019-05-02T16:03:07.000Z"
                }
            }
        }
    ]

export default currenciesData;       