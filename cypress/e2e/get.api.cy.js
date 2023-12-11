/// <reference types="cypress"/>
import requests from "../src/requests"
import responses from "../src/responses"

describe("GET",()=>{

    it("List one single device",()=>{

        const device_id = "7"
        
        requests.getRequest(device_id)
            .then((response)=>{
                responses.valResponseValidGet(response,device_id);
            })
    })
})