const getResponse = function() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      let response = "This is response from server";
      reject('Error');
      resolve("NotError");
    }, 2000);
  });
  } 
  
  async function fetchData() {
    console.log("starting fetching data");
    try{
    console.log("starting fetching data");

        const data = await getResponse();
        console.log(data);
    }
    catch (e){
      console.log(e);
    }
  }
  
  fetchData();