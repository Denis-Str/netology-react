export default function declensionWord(count, form) {
  const num100 = count % 100;
  const num10 = count % 10;
  let result;

  if (typeof count === 'number') {
    if (num100 >= 5 && num100 <= 20) {
      result = form[2];
    } else if (num10 === 0) {
      result = form[2];
    } else if (num10 === 1) {
      result = form[0];
    } else if (num10 >= 2 && num10 <= 4) {
      result = form[1];
    } else if (num10 >= 5 && num10 <= 9) {
      result = form[2];
    }
  }

  return result;
}
