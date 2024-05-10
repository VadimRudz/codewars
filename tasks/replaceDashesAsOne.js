function replaceDashesAsOne(str) {

    str = str.replace(/-[- ]*-/g, '-');

    console.log(str);

    return str ;
    
}

const str1 = "we-are- - - code----warriors.-";
// eslint-disable-next-line no-unused-vars
const str2 = "twwfwn- - - - -gfruenhh- - -mfsa--------chhpkgwaxy-----";

replaceDashesAsOne(str1);
