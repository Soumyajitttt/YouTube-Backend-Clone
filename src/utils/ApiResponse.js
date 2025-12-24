class ApiResponse {
     constructor(statuscode, message="kuch problem nhi h",data){
        this.statuscode=statuscode;
        this.message=message;
        this.data=data;
        this.success=statuscode>=200 && statuscode<400;
    }
}

export default ApiResponse;