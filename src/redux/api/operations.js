
const operations = [
  {title: 'Prepaymanet', amount: 40000, date: '2018-04-25T17:55:06.259Z'},
  {title: 'Salary', amount: 47000, date: '2018-04-25T17:55:06.259Z'},
  {title: 'Products', amount: -1262, date: '2018-04-25T22:05:06.009Z'},
  {title: 'Bar Sherlock', amount: -4200, date: '2018-04-26T23:25:06.009Z'},
  {title: 'Cat\'s food', amount: -1003, date: '2018-04-26T13:23:06.009Z'},
  {title: 'Music subscription', amount: -179, date: '2018-04-27T03:23:06.009Z'},
  {title: 'Products prizm', amount: -731, date: '2018-04-28T03:23:06.009Z'},
  {title: 'Debt', amount: 1000, date: '2018-04-28T03:23:06.009Z'},
  {title: 'beer dark', amount: -1020, date: '2018-04-29T03:22:06.009Z'},
  {title: 'Far cry 3', amount: -1600, date: '2018-04-29T03:23:06.009Z'},
  {title: 'Bar', amount: -5347, date: '2018-05-01T03:23:06.009Z'},
  {title: 'Kirill', amount: 950, date: '2018-05-01T03:23:06.009Z'},
  {title: 'Ivan', amount: 1500, date: '2018-05-01T03:23:06.009Z'},
  {title: 'Internet', amount: -1000, date: '2018-05-02T03:23:06.009Z'},
  {title: 'Film', amount: -920, date: '2018-05-02T03:23:06.009Z'},
  {title: 'Lunch', amount: -288, date: '2018-05-03T03:23:06.009Z'},
  {title: 'Kitty drugs', amount: -164, date: '2018-05-05T03:23:06.009Z'},
  {title: 'Beer', amount: -803, date: '2018-05-06T03:23:06.009Z'},
]

export const fetchOperations = () => Promise.resolve(operations)

export const addOperation = ({title, amount}) => Promise.resolve()
  .then(() => operations.shift({title, amount, date: new Date().toISOString()}))
