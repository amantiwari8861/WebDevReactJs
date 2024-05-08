// let num=undefined;
// let result=num || "default value";
// let result2=num ?? "default value";

// console.log(result);
// console.log(result2);

// let user={
//     "name":"Aman"
// }

// console.log(user?.mobile);
const user = {
    name: 'John Doe',
    address: {
      street: '123 Main Street',
    //   city: 'Anytown',
      state: 'CA',
      zip: '12345',
    },
  };
  
  // Traditional approach:
  const city = (user.address && user.address.city) ?? 'Unknown';
  
  // Optional chaining:
//   const city = user?.address?.city ?? 'Unknown';
  
  // If user.address is null or undefined, city will be 'Unknown'.
  console.log(city);