const netsuiteTestdata = require('../../testdata/netsuite.json')
const netsuitePage = require('../../../pages/netsuitePage')

const accountId = netsuiteTestdata.upgrade_AccountId_cc;

describe(`Netsuite_orderCancellation_upgradeLevel_cc_${accountId}`, () => {

  it(`netsuite_orderCancellation_upgradeLevel_cc_${accountId}`, async () => {
    await netsuitePage.orderCancellation(accountId);
  });


});

