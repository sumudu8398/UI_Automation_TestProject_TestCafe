import { faker } from '@faker-js/faker';
import helper from "./Helper/helper";
import logging from "./Pages/logging";
import cart from "./Pages/cart";
import checkout from "./Pages/checkout";
import inventory from "./Pages/inventory"


fixture("Getting Started")
    .page("https://www.saucedemo.com/");

test("Automation test for saucedemo.com page", async t => {
    await t.wait(1000);
    // Type Username and Password
    await logging.typeUsername();
    await logging.typePassword();

    // Click submit button
    await logging.clickSubmit();

    //Navigate to Inventory Page
    await t.wait(1000);

    await inventory.verifyTitle(); // Verify the title

    await helper.scrollDown(); // helps to scroll down the page
    await inventory.verifyPriceOfTheJacket(); // Verify the Jacket price

    // Adding to items to cart
    await helper.clickItem(inventory.sauceLabsBackpack());
    await helper.clickItem(inventory.sauceLabsOnesie());

    await inventory.verifyTheItemCount(); // Verify the items count

    // Navigate to Cart Page
    await helper.clickItem(inventory.cart());

    await t.wait(1000)
    await cart.verifyItemsInTheCart(); // Verify added items

    // navigate to checkout page
    await helper.clickItem(cart.button());

    const firstName = faker.name.firstName(); // randomly generate firstname
    const lastName = faker.name.lastName(); // randomly generate lastName
    const zip = faker.address.zipCode(); // randomly generate zipcode

    // Type firstName, lastName, zipcode
    await checkout.typeFirstName(firstName);
    await checkout.typeLastName(lastName);
    await checkout.typePostalCode(zip);

    await helper.clickItem(checkout.submit()) // click submit

    // ----   Finish --------------------------------
});
