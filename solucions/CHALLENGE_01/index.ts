import { TEXT } from "./text.ts"

const group = (text: string): string => {
	let entries = text.split(" ")
	const output: any = []
	let string: string = ""
	entries.forEach((name) => {
		if (!output[name]) {
			const lowerCaseName = name.toLowerCase()
			output[name] = "."
			string +=
				name +
					entries.filter((entry) => {
						return entry.toLowerCase() === lowerCaseName
					})?.length || 1
		}
	})

	return string
}

console.log(group(TEXT))
