export function getAdat(vegpont, callback) {
  fetch(vegpont)
    .then((response) => response.json())
    .then((data) => {
      callback(data); //callback - egy másik fv paramétereként kapott fv, aszinkron hívásoknál használjuk
    })
    .catch((error) => {
      console.log(error);
    });
}
