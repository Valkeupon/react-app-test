// import instagram from 'instagram-api';
//
// const accessToken = "4693020258.1677ed0.6978b4dd953c44d6a54eb984ebcf0317";
// const instagramAPI = new instagram(accessToken);
//
// export default {
//   getPictures: () => {
//     return new Promise((resolve, reject) => {
//       instagramAPI.userSelf().then(function(result) {
//         console.log(result.data); // user info
//         console.log(result.limit); // api limit
//         console.log(result.remaining) // api request remaining
//         resolve(result.data);
//       }, function(err){
//         console.log(err); // error info
//       });
//     });
//   }
// }
