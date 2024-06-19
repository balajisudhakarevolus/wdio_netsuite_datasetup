const netsuiteTestdata = require('../../testdata/netsuite.json')
const netsuitePage = require('../../../pages/netsuitePage')

const accountId = netsuiteTestdata.accountId_nonmember;
const memberLevel = netsuiteTestdata.nonmember;

describe(`Netsuite_orderCancellation_retainLevel_${memberLevel}_${accountId}`, () => {

  it(`netsuite_orderCancellation_retainLevel_${memberLevel}_${accountId}`, async () => {
    await netsuitePage.orderCancellation(accountId);
  });
});
