function counter(number) {
  const names = ["пост", "поста", "постов"];
  return names[
    /1$/.test(number)
      ? /[1][1]$/.test(number)
        ? 2
        : 0
      : /(2|3|4)$/.test(number)
      ? /([1][2]|[1][3]|[1][4])$/.test(number)
        ? 2
        : 1
      : 2
  ];
}

module.exports = counter;
