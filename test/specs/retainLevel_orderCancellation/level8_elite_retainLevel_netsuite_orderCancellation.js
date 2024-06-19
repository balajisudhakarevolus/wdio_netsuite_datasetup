const netsuiteTestdata = require('../../testdata/netsuite.json')
const netsuitePage = require('../../../pages/netsuitePage')

const accountId = netsuiteTestdata.accountId_elite;
const memberLevel = netsuiteTestdata.elite;

describe(`Netsuite_orderCancellation_retainLevel_${memberLevel}_${accountId}`, () => {

  it(`netsuite_orderCancellation_retainLevel_${memberLevel}_${accountId}`, async () => {
    await netsuitePage.orderCancellation(accountId);
  });
});