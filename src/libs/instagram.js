import instagram from 'instagram-api';

const accessToken = "4693020258.1677ed0.6978b4dd953c44d6a54eb984ebcf0317";
const instagramAPI = new instagram(accessToken);


export default {
  getData: () => {
    instagramAPI.userSelf().then(function(result) {
      const userId = result.data.id;
      return instagramAPI.userMedia(userId).then(function(elem){
        return elem.data;
      });
    }, function(err){
      console.log(err); // error info
    });
  }
}
