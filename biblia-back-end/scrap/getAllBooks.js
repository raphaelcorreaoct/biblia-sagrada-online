const axios = require('axios');
const fs = require('fs');

const books = require('./books.json');

// const getBooks = async () => {
//   const { data } = await axios.get(
//     'https://www.abibliadigital.com.br/api/books',
//   );

//   const books = JSON.stringify(data);
//   fs.writeFileSync('books.json', books);
// };

const getAllVerse = async () => {
  const dt = [];
  const reqs = books.map((book) => {
    return axios.get(
      `https://www.abibliadigital.com.br/api/verses/nvi/${book.abbrev.pt}/${book.chapters}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlR1ZSBOb3YgMTQgMjAyMyAwMjo1NTozOCBHTVQrMDAwMC5tYW5hZGFkZWVsZWZhbnRlQGdtYWlsLmNvbSIsImlhdCI6MTY5OTkzMDUzOH0.b5fEl20ht1tL0L8GDRdADyeHYW8-yKrz0530UATTvsI`,
        },
      },
    );
  });

  const data = await Promise.all(reqs);

  data.forEach((element) => {
    dt.push(element.data);
  });
  fs.writeFileSync('verses.json', JSON.stringify(dt, null, 4));
};

getAllVerse();
//getBooks();
