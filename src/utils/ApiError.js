class ApiError extends Error{
    constructor(statuscode, message="kuch problem hogyi h"){
        super(message)
        this.statuscode=statuscode;
        this.message=message;
        this.data=null;
        this.success=false;
    }
}

export default ApiError;    