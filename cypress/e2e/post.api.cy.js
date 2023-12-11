const { expect } = require("chai")
const postBody = require("../fixtures/validPost.json")
import requests from "../src/requests"
import postValidation from "../src/postValidation"

describe("POST",()=>{

    it("Include a valid register", ()=>{

        requests.postRequest(postBody)
            .then((response)=>{
                postValidation.valResponseValidPost(response,postBody)
        })
            
    })
})