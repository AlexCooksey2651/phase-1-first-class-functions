function receivesAFunction(doodad) {
    return doodad();
};

receivesAFunction(function () { return "I love fluffy cats!"; });

function returnsANamedFunction() {
    return function goApplePicking() {
        console.log('Pick some apples');
    };
};

function returnsAnAnonymousFunction() {
    return function () {
        return 'Google is my friend for finding answers';
    };
};