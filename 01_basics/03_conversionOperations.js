let score1 = Number("33") // 33 -> number
let score2 = Number("33abc") // NaN -> Not a Number
let score3 = Number(null) // 0
let score4 = Number(undefined) // NaN
let score5 = Number(true) // 1

console.table([typeof(score1), typeof(score2), typeof(score3), typeof(score4), typeof(score5)])
console.table([score1, score2, score3, score4, score5])

// Conversion to bool
// "" -> false
// "abc" -> true


