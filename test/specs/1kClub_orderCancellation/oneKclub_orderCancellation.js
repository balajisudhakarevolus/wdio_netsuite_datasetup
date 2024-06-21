const netsuiteTestdata = require('../../testdata/netsuite.json')
const netsuitePage = require('../../../pages/netsuitePage')

const accountId = netsuiteTestdata.oneKClub_AccountId;

describe(`Netsuite_orderCancellation_1K_Club_${accountId}`, () => {

  it(`netsuite_orderCancellation_upgradeLevel_ach_${accountId}`, async () => {
    await netsuitePage.orderCancellation(accountId);
  });


});

