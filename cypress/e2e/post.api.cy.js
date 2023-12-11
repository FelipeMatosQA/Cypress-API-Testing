const { expect } = require("chai")
const postBody = require("../fixtures/validPost.json")
import requests from "../src/requests"
import responses from "../src/responses"


describe("POST",()=>{
    it("Include a valid register", ()=>{

        requests.postRequest(postBody)
            .then((response)=>{
                responses.valResponseValidPost(response,postBody)
        })
            
    })
})