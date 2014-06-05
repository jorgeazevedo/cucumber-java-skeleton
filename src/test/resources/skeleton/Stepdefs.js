function assertEquals(expected, actual) {
    if (expected != actual) {
        throw "Expected " + expected + ", but got " + actual;
    }
}

function assertContains(expectedVal, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == expectedVal) return;
    }
    throw "Expected array containing " + expectedVal + ", but got " + array;
}

Given(/^I have (\d+) cukes in my belly$/, function(arg1) {
});


When(/^I wait (\d+) hour$/, function(arg1) {
});

Then(/^my belly should growl$/, function() {
});

