const netsuiteTestdata = require('../../testdata/netsuite.json')
const netsuitePage = require('../../../pages/netsuitePage')

const accountId = netsuiteTestdata.upgrade_AccountId_ec;

describe(`Netsuite_orderCancellation_upgradeLevel_ec_${accountId}`, () => {

  it(`netsuite_orderCancellation_upgradeLevel_ec_${accountId}`, async () => {
    await netsuitePage.orderCancellation(accountId);
  });


});

