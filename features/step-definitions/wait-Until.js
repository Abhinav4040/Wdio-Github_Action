const { Given, When, Then } = require('@wdio/cucumber-framework');
Given(/^I am on the application$/, async() => {
    browser.url('https://the-internet.herokuapp.com/dynamic_loading')
    await browser.maximizeWindow();
    await $(`//a[normalize-space()='Example 1: Element on page that is hidden']`).click();
    await $(`//button[normalize-space()='Start']`).click();
    const text =  await $(`//h4[normalize-space()='Hello World!']`);

    await text.waitUntil(
        async function(){
           return (await this.getText() === 'Hello World!')
        },
        {
            timeout : 2000,
            timeoutMsg : "Text not displayed after 2 seconds",
        } 
    )
    console.log(text.getText());

    
});
