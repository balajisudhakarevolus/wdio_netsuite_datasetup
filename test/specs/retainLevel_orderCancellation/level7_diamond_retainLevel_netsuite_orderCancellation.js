const netsuiteTestdata = require('../../testdata/netsuite.json')
const netsuitePage = require('../../../pages/netsuitePage')

const accountId = netsuiteTestdata.accountId_diamond;
const memberLevel = netsuiteTestdata.diamond;

describe(`Netsuite_orderCancellation_retainLevel_${memberLevel}_${accountId}`, () => {

  it(`netsuite_orderCancellation_retainLevel_${memberLevel}_${accountId}`, async () => {
    netsuitePage.orderCancellation(accountId);
  });
});