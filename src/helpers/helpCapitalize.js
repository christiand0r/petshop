const helpCapitalize = (text) => {
  const texts = text.toLowerCase().split(" ");

  const firstWord = texts[0].charAt(0).toUpperCase() + texts[0].slice(1);

  let string = firstWord;

  texts.forEach((word, idx) => {
    if (idx === 0) return;
    string += " " + word;
  });

  return string;
};

export default helpCapitalize;
