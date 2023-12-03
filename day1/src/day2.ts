
const fs = require('fs')

fs.readFile('input.txt', 'utf8', processFile)

let teste: string = "Testando 3"

console.log(teste)

function processFile(err, data) {
	if (err) throw "Deu erro"

	console.log(data)

	let start_n: number = -1;
	let end_n: number = -1;
	let full_n: number = -1;

	let total_sum = 0

	for(let i in data) {

		const char = data.charAt(i) 

		if (char === '\n') { // if new line

			full_n = +`${start_n}${end_n}`
			
			total_sum += full_n
			console.log(full_n)
			
			start_n = -1
			end_n = -1
			full_n = -1
		} else {

			const curr_n = checkNumber(i, data)

			if(curr_n !== -1) { // if is number
				if(start_n === -1) start_n = curr_n

				end_n = curr_n
			}
		}

		console.log(char)
	}

	console.log('TOTAL SUM', total_sum)

}

function checkNumber(index: number, str: string) {

	const inWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	
	if(!isNaN(str[index])) return +str[index] // check if is digit
	
	let value = -1

	for (let i = 0; i < inWords.length; i++) {
		const word = inWords[i]

		if(str.substring(index, index+6).startsWith(word)) {
			value = i
			break
		}
	}

	return value
}

