function counter(number) {
  const names = ["пост", "поста", "постов"];
  const twoFour = ["2", "3", "4"];
  const twentyFourteen = ["12", "13", "14"];
  const numberStringified = number.toString();
  return names[
    numberStringified.endsWith("1")
      ? numberStringified.endsWith("11")
        ? 2
        : 0
      : twoFour.some(n => numberStringified.endsWith(n))
      ? twentyFourteen.some(n => numberStringified.endsWith(n))
        ? 2
        : 1
      : 2
  ];
}

module.exports = counter;
