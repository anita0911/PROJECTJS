let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     console.log('the first promise has resolved');
    resolve(10);
 }, 1000);
});
let p2=new Promise((resolve,reject)=>{
     
    setTimeout(()=>{
    console.log('the second promise has resolved');
    resolve(20);
 }, 2000);
});
let p3=new Promise((resolve,reject)=>{
     setTimeout(()=>{
          console.log('the second promise has resolved');
          resolve(30);
       }, 3000);
});
Promise.all([p1,p2,p3]).then((results)=>{
     console.log(`Results: ${results}`);
}).catch((error)=>{
     console.log(`Error:${error}`);
});