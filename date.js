let a = new Date()

// getting of time
console.log(a.getFullYear()) //2024
console.log(a.getDate()) //17
console.log(a.getDay()) //0
console.log(a.getHours()) //19
console.log(a.getMilliseconds()) //305s
console.log(a.getMinutes()) //48
console.log(a.getMonth()) //10
console.log(a.getSeconds()) //1
console.log(a.getTime()) //1731853156987 seconds from jan 1 1970


console.log(a.getTimezoneOffset()) //-330 returns   MINUTES from UTC
// positive values represent local time behind the UTC
//negative values represent local time is ahead of UTC
//Zero indicates the local time is equal to UTC

console.log(a.getUTCDate());
console.log(a.getUTCDay())
console.log(a.getUTCFullYear())
console.log(a.getUTCHours())
console.log(a.getUTCMilliseconds())
console.log(a.getUTCMinutes())
console.log(a.getUTCMonth())
console.log(a.getUTCSeconds())
// console.log(a.getVarDate)

// time for future purpose in machine understanble way
// console.log(a.setDate(5))
// console.log(a.setFullYear(2025))
// console.log(a.setHours(14))
// console.log(a.setMilliseconds())
// console.log(a.setMinutes())
// console.log(a.setMonth())
// console.log(a.getSeconds())
// console.log(a.setTime())
// console.log(a.setUTCDate(5))
// console.log(a.setUTCFullYear())


// coverting of time to string as human understable way
console.log(a.toDateString())
console.log(a.toISOString())
console.log(a.toJSON())
console.log(a.toLocaleDateString())
console.log(a.toLocaleString())
console.log(a.toLocaleTimeString())
console.log(a.toString())
console.log(a.toTimeString())
console.log(a.toUTCString())