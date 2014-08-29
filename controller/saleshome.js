exports.list = function (req, res) {
    setTimeout(function () {
        res.json(200, {
            parentId: '',
            id: '12345',
            name: '绍兴',
            teamAmount: 30000000,
            salesAmount: 3006005,
            salesIncome: 682135,
            salesAdAmount: 2232323,
            onlineDealGroup: 80323,
            onlineKABAccount: 32222,
            newDealGroup: 322232,
            newShop: 12345,
            onlineShop: 54321,
            yesterdaySalesAmount: 1212392,
            yesterdayTeamAmount: 12445233,
            almostExpired: 932,
            isLast: false,
            updateTime: '2014-01-16 11:19:12',
            keyShopCnt:901,
            grossMargin:0.345,
            dealPerShop:1.67,
            offlineDealgrp:901,
            walkInPercent:0.345,
            cashDealgrpPercent:0.345,
            visitCnt:901,

            child: [{
                parentId: '12345',
                id: '00E90000000F8lqEAC',
                name: '绍兴团购组',
                salesAmount: 12103218,
                yesterdaySalesAmount: 523232212,
                salesIncome: 34329423,
                salesAdAmount: 2341234,
                onlineDealGroup: 291,
                onlineKABAccount: 3993,
                newShop: 12345,
                onlineShop: 54321,
                newDealGroup: 2323,
                keyShopCnt:901,
                grossMargin:0.345,
                dealPerShop:1.67,
                offlineDealgrp:901,
                walkInPercent:0.345,
                cashDealgrpPercent:0.345,
                visitCnt:901,
                lastBrother: {
                    id: '00E90000000F8vCEAS'
                },
                nextBrother: {
                    id: '00E90000000F8vCEAS'
                }
            },
            {
                parentId: '12345',
                id: '00E90000000F8vCEAS',
                name: '绍兴团购无业绩归属组',
                teamAmount: 0,
                salesAmount: 323874382,
                yesterdaySalesAmount: 0,
                yesterdayTeamAmount: 0,
                salesIncome: 0,
                salesAdAmount: 100,
                onlineDealGroup: 0,
                onlineKABAccount: 0,
                newShop: 12345,
                onlineShop: 54321,
                newDealGroup: 0,
                keyShopCnt:901,
                grossMargin:0.345,
                dealPerShop:1.67,
                offlineDealgrp:901,
                walkInPercent:0.345,
                cashDealgrpPercent:0.345,
                visitCnt:901,
                lastBrother: {
                    id: '00E90000000F8lqEAC'
                },
                nextBrother: {
                    id: '00E90000000F8lqEAC'
                }
            }]
        });
    }, 5000);
}