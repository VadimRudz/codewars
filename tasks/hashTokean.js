import moment from 'moment';
import MD5 from 'crypto-js/md5.js';

const TAF = 'ADA9C1AFC7E69ACC3B14688AE34E265CCBB2A208';

export function getCurrentDate() {
    const dateNow = new Date();
    return moment(dateNow).format('YYYY-MM-DD');
}
  
export function getHashOfToken() {
    const token = `${TAF}${getCurrentDate()}`;
    return MD5(token).toString();
}

console.log(getHashOfToken());


