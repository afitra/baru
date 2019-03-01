 var arr = [{
         id: 36,
         UserId: 90,
         DislikeId: 73,
         status: "true",
         createdAt: "2019-02-28T21:48:10.081Z",
         updatedAt: "2019-02-28T21:48:10.081Z"
     },
     {
         id: 37,
         UserId: 90,
         DislikeId: 74,
         status: "true",
         createdAt: "2019-02-28T21:48:11.250Z",
         updatedAt: "2019-02-28T21:48:11.250Z"
     },
     {
         id: 38,
         UserId: 90,
         DislikeId: 75,
         status: "true",
         createdAt: "2019-02-28T21:48:12.427Z",
         updatedAt: "2019-02-28T21:48:12.427Z"
     },
     {
         id: 39,
         UserId: 90,
         DislikeId: 74,
         status: "true",
         createdAt: "2019-02-28T21:48:22.283Z",
         updatedAt: "2019-02-28T21:48:22.283Z"
     },
     {
         id: 40,
         UserId: 90,
         DislikeId: 74,
         status: "true",
         createdAt: "2019-02-28T21:48:22.789Z",
         updatedAt: "2019-02-28T21:48:22.789Z"
     },
     {
         id: 41,
         UserId: 90,
         DislikeId: 74,
         status: "true",
         createdAt: "2019-02-28T21:48:23.298Z",
         updatedAt: "2019-02-28T21:48:23.298Z"
     }
 ]
 var obj = {}
 for (let i = 0; i < arr.length; i++) {
     if (obj[arr[i].DislikeId] == undefined) {
         obj[arr[i].DislikeId] = 1
     } else {
         obj[arr[i].DislikeId] += 1
     }
 }
 var val = []
 for (var values in obj) {
     val.push(obj[values])
 }
 var result = 0
 for (var key in obj) {
     if (obj[key] == Math.max(...val)) {
         result = key
     }
 }
 //  console.log(obj);
 //  console.log(result);

 //  console.log(Math.max(...val));
 var b = (29 + 80) % 30
 //  var c = new Date()
 //  let a = c.getUTCDate()
 //  console.log(a);
 var a = new Date(new Date().getFullYear(), new Date().getMonth(), b).toDateString()
 console.log(a);