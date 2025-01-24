const _ =require("lodash")


const holidays=[
   { name:"Christmas", date:new Date("2025-12-25")},
   { name:"Canada Day", date:new Date("2025-07-01")},
   { name:"New Years ", date: new Date("2026-01-01")},
   { name:"Easter", date: new Date("2025-04-20")},
]

let today = new Date(); holidays.forEach(holiday=>{
    let dateDifference = holiday.date - today
    let days = Math.ceil((dateDifference/(1000 * 60 * 60 * 24)))
    console.log(days)
})
// consloe.log(_sample(holidays))
console.log(_.findIndex(holidays,{name:"Canada Day"}))