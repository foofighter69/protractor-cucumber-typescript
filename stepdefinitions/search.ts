import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then } = require("cucumber");

const search: SearchPageObject = new SearchPageObject();

When(/^I type "(.*?)"$/, async (text) => {
    await search.searchTextBox.sendKeys(text);
});

When(/^I click on search button$/, async () => {
    await search.searchButton.click();
});

When(/^I hit enter in the search input$/, async () => {
	var until = protractor.ExpectedConditions;
	browser.wait(until.presenceOf(search.searchTextBox), 5000, 'Element taking too long to appear in the DOM');
    await search.searchTextBox.sendKeys(protractor.Key.ENTER);
});


Then(/^I click on google logo$/, async () => {
    await search.logo.click();
});
