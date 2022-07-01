const statuses = [
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 1,
    statusName: 'Appeal 01 - Verdict Obtained',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 6,
    statusName: 'Arb 02 – Arbitration Requested',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 7,
    statusName: 'Arb 07 – Arbitration Decision Received',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 8,
    statusName: 'LIT 12 - Case On The Trial Calendar',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 9,
    statusName: 'Closed Case',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 13,
    statusName: 'Judgment 03 – Filed',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 14,
    statusName: 'Judgment 02 – Submitted/Pending Signature',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 15,
    statusName: 'Judgment 01 – To Be Submitted For Signature',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 16,
    statusName: 'Judgment 04 – Out For Execution',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 19,
    statusName: 'LIT 00 - Lawsuit Needed',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 20,
    statusName: 'LIT 04 - Answer Received',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 21,
    statusName: 'LIT 05 - Initial Discovery Pack To Be Served',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 23,
    statusName: 'LIT 08 - Depositions And Other Discovery Ongoing',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 24,
    statusName: 'LIT 10 - Expert Prep And Designations\t',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 36,
    statusName: 'Settled 01 - Awaiting Documents',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 37,
    statusName: 'Presign - Case Signed - File Not In Office',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 38,
    statusName: 'Presign - Ref In - Awaiting Retainer',
  },
  {
    statusTypeID: 1,
    statusTypeName: 'Status',
    statusID: 39,
    statusName: 'Pre-Lit 01 - New Case - Initial Letters To Be Sent',
  },
]

// 1. define a variable that has a value of a prime number
let prime = 3

// 2. create a function that return the larger number
function newFunction(x, y) {
  if (x > y) {
    return x
  } else {
    return y
  }
}

console.log(newFunction(1, 2))

// 3. create an infinite loop
for (i = prime; i >= 2; i++) {
  console.log(i + 1)
}

// 4. find a status with an id greater than 20 but less than 25 ( use an array method NOT length)

console.log(statuses[11])

// 5. what is the difference between for loop and while loop (path of execution)
for (let i = 0; i < 15; i--) {
  console.log(i)
}

let x = 0
while (x < 15) {
  x--
  console.log(x)
}
// 6. what is the difference between POST and PUT (one creates && one updates)

//POST creates and sends the data from the backend to the api
//PUT receives the data from the backend to the api and updates it within the front end

// 7. Bonus !!!! ( slack me)
