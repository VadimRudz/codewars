import { loggers } from "winston";

function getRandomArbitary(min, max) {
	return Math.random() * (max - min) + min;
}

console.log(getRandomArbitary(1,5).toFixed(2));