/**
Promises --> simple objects that represent eventual completion 
or failure of an asynchronous operation. 

--> Pending
--> Fulfilled (Resolved)
--> Rejected

// Creation of Promises

const isEven = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve(`${number} is even`);
      } else {
        reject(`${number} is odd`);
      }
    }, 1000);
  });
};

// Consuming a Promise
// console.log(isEven(4))
isEven(4)
  .then((divyansh) => {
    console.log({ divyansh });
  })
  .catch((hola) => {
    console.log({ hola });
  })
  .finally(() => {
    console.log("Yayy operation is completed");
  });

Promise()
  .resolve()
  .then(() => {});
*/

// Fetch API

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
// })
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

// POST, "GET", PUT, DELETE, PATCH;

// const isDeliveryPartnerAssigned = true;
// const didDeliveryPartnerAccept = false;

// const isDelivered = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isDeliveryPartnerAssigned && didDeliveryPartnerAccept)
//         resolve("Delivery is on the way.");
//       else reject("No one accepted the order. Please try after sometime");
//     }, 3000);
//   });
// };

// isDelivered()
//   .then((mess) => {
//     console.log(mess);
//   })
//   .catch((err) => console.log(err));

// function isEven(num) {
//   if (num % 2 === 0) return true;
//   else return false;
// }

// const isEven = (num) => {
//   if (num % 2 === 0) return true;
//   else return false;
// };

// hooks
// hoc
// functional components
