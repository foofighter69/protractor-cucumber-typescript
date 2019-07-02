import { $, ElementFinder, element, by } from "protractor";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;

    constructor() {
        this.searchTextBox = $("input[title='Search']");
        this.searchButton = element(by.css("input[value='Google Search']"));
        this.logo = $("div.logo img");
    }
}
