export class DATA{
    apiurl="http://localhost:8090/api/players";

    getGridData(requestBody,successCallBack,errorCallBack){
        console.log("getGridData : " + requestBody);
        return this.getApiData(
this.apiurl,
"GET",
requestBody,
"",
successCallBack,
errorCallBack
        );
    }

    getApiData(
        url,
        methodType,
        requestData,
        pageSize,
        successCallBack,
        errorCallBack
    ){
        console.log("getApiData : url :" + url + " data "  + JSON.stringify(requestData));
        fetch(url,{
            method:methodType,
            headers:{
"Accept" :"application/json",
"Content-Type" : "application/json"
            },
          //  body:JSON.stringify(requestData)
            })
            .then(res => res.json())
            .then(
                (result) => {
                    successCallBack(result,pageSize);
                },
                (error) => {
                    console.log("error :" + error);
                    errorCallBack(error);
                }
            );
        }
}