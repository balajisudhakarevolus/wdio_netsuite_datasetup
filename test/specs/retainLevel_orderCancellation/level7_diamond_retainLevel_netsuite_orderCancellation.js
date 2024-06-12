const netsuiteTestdata = require('../../testdata/netsuite.json')

const accountId = netsuiteTestdata.accountId_diamond;
const memberLevel = netsuiteTestdata.diamond;
let diff;

describe(`Netsuite_orderCancellation_retainLevel_${memberLevel}_${accountId}`, () => {

  it(`netsuite_orderCancellation_retainLevel_${memberLevel}_${accountId}`, async () => {
    await browser.url("https://5019605-sb2.app.netsuite.com/pages/customerlogin.jsp?c=5019605_SB2&whence=")
    await expect(browser).toHaveUrl("https://5019605-sb2.app.netsuite.com/pages/customerlogin.jsp?c=5019605_SB2&whence=")
    await browser.$("#email").setValue("gowtham.nagarajan.c@evolus.com")
    await browser.$("#password").setValue("Netsuite@1")
    await browser.$("#submitButton").click()
    await expect(browser).toHaveUrl("https://5019605-sb2.app.netsuite.com/app/login/secure/securityquestions.nl?src_dc=iad-na20&whence=")
    const question = await (browser.$("(//td[@class='smalltextnolink text-opensans'])[3]")).getText()
    if (question.includes('childhood nickname?')) {
      await browser.$("//input[@type='password']").setValue("gowthn")
    } else if (question.includes('sibling live?')) {
      await browser.$("//input[@type='password']").setValue("pune")
    } else {
      await browser.$("//input[@type='password']").setValue("chennai")
    }
    await browser.$("//input[@type='submit']").click()
    await expect(browser).toHaveUrl("https://5019605-sb2.app.netsuite.com/app/center/card.nl?sc=-29&whence=")
    await browser.$("//input[@placeholder='Search']").setValue(accountId)
    await browser.pause(2000)
    await browser.$("(//span[@data-automation-id='link-name'])[1]").click()
    await expect(browser).toHaveUrl(expect.stringContaining('common/entity/custjob'))
    if (await $("//table[@id='finhist__tab']//td[contains(text(),'Pending')]").isExisting()) {
      let totalOrdersCount = await (browser.$$("//table[@id='finhist__tab']//td[contains(text(),'Pending')]")).length;
      console.log('totalOrdersCount - ' + totalOrdersCount)
      for (let i = 1; i <= totalOrdersCount; i++) {
        await browser.$("//input[@placeholder='Search']").setValue(accountId)
        await browser.pause(2000)
        await browser.$("(//span[@data-automation-id='link-name'])[1]").click()
        await browser.$("//table[@id='finhist__tab']//tr[1]/td[4]/a").click()
        await expect(browser).toHaveUrl(expect.stringContaining('app/accounting/transactions/salesord'))
        if (await $("#closeremaining").isExisting()) {
          await browser.$("#closeremaining").click()
          await $("//div[text()='Sales Order successfully Closed']").waitForDisplayed()
        } else {
          await browser.$("//td[@id='tdbody_cancelorder']/input").click()
          const iframe = await $('#Confirmation_frame');
          await browser.switchToFrame(iframe);
          await browser.$("//td[@id='tdbody_ok']/input").click()
          await browser.switchToParentFrame();
          await $("//div[text()='Sales Order successfully Cancelled']").waitForDisplayed()
        }
      }
    }
  });
});