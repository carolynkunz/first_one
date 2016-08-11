var months = [
  january{
    name: 'January',
    days: 31
  }
  february{
    name: 'February',
    days: 28
  }
]

function daysInMonth(month) {
  for (var i = 0; i <= month; i++){
    console.log(month + i);
  }
}

daysInMonth(january);
