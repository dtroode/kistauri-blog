function counter(number, names) {
  return names[
    // Check if number ends with 1
    /1$/.test(number)
      ? // Check if number ends with 11
      /[1][1]$/.test(number)
        ? 2
        : 0
      : // Check if number ends with 2 or 3 or 4
      /(2|3|4)$/.test(number)
        ? // Check if number ends with 12 or 13 or 14
        /([1][2]|[1][3]|[1][4])$/.test(number)
          ? 2
          : 1
        : 2
  ]
}

module.exports = counter
