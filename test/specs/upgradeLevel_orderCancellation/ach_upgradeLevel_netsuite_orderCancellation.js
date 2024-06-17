const netsuiteTestdata = require('../../testdata/netsuite.json')
const netsuitePage = require('../../../pages/netsuitePage')

const accountId = netsuiteTestdata.upgrade_AccountId_ach;

describe(`Netsuite_orderCancellation_upgradeLevel_ach_${accountId}`, () => {

  it(`netsuite_orderCancellation_upgradeLevel_ach_${accountId}`, async () => {
    netsuitePage.orderCancellation(accountId);
  });


});

