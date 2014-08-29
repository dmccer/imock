module.exports = {
    'SalesPerformance/Summary': [{
        method: 'get',
        name: 'index'
    }],
    'SalesPerformance/list': [{
        method: 'get',
        name: 'list'
    }],
    'SalesHome': [{
        method: 'get',
        name: 'list'
    }],
    'SalesHome/:id': [{
        method: 'get',
        name: 'list'
    }],
    'SalesPerformance/deal-count': [{
        method: 'get',
        name: 'index'
    }],
    'messages': [
        {
            method: 'get',
            name: 'list'
        },
        {
            method: 'put',
            name: 'update'
        }
    ],
    'messages/:id': [{
        method: 'get',
        name: 'index'
    }, {
        method: 'put',
        name: 'update'
    }],
    'approvals': [{
        method: 'get',
        name: 'list'
    }],
    'contract-task/:id': [{
        method: 'put',
        name: 'update'
    }],
    'DealGroup/InApprove': [{
        method: 'get',
        name: 'list'
    }],
    'DealGroup/Reject': [{
        method: 'get',
        name: 'list'
    }],
    'DealGroup/almostexpired': [{
        method: 'get',
        name: 'list'
    }],
    'accounts': [
        {
            method: 'get',
            name: 'list'
        }
    ],
    'shop': [{
        method: 'get',
        name: 'list'
    }],
    'searchuser': [
        {
            method: 'get',
            name: 'list'
        }
    ],
    'teamMembers': [
        {
            method: 'get',
            name: 'list'
        }
    ],
    'visitInfo': [
        {
            method: 'get',
            name: 'index'
        }
    ],
    'AccountVisit/:id': [
        {
            method: 'get',
            name: 'list'
        }
    ],
    'AccountContact/:id': [
        {
            method: 'get',
            name: 'list'
        }, {
            method: 'put',
            name: 'update'
        }, {
            method: 'post',
            name: 'add'
        }
    ],
    'visit': [
        {
            method: 'post',
            name: 'create'
        }
    ],
    'visit/:id': [
        {
            method: 'put',
            name: 'update'
        }
    ],
    'user': [
        {
            method: 'get',
            name: 'get'
        }
    ],
    'feedback': [
        {
            method: 'post',
            name: 'create'
        }
    ],
    'errors': [
        {
            method: 'post',
            name: 'create'
        }
    ],
    'marks': [
        {
            method: 'post',
            name: 'create'
        }
    ],
    'dealGroups/:id/effectiveDate': [{
        method: 'put',
        name: 'update'
    }],
    'DealGroupApproval/:id': [{
        method: 'put',
        name: 'update'
    }],
    'integration/adStockUrl': [{
        method: 'get',
        name: 'get'
    }],
    'accountManagement/:id': [{
        method: 'post',
        name: 'update'
    }],
    'shop/:shopId/dealgroup': [
        {
            method: 'get',
            name: 'list'
        }
    ],
    'MyAccountCount': [
        {
            method: 'get',
            name: 'get'
        }
    ],
    'performance/ad/:id': [{
      method: 'get',
      name: 'list'
    }]

}