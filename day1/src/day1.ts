
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
		} else if(!isNaN(char)) { // if is number
			if(start_n === -1) start_n = +char

			end_n = +char
		}

		console.log(char)
	}

	console.log('TOTAL SUM', total_sum)

}
