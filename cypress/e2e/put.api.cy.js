const { expect } = require("chai")

const postBody = require("../fixtures/validPost.json")

const putBody = require("../fixtures/validPut.json")

import requests from "../src/requests"
import responses from "../src/responses"

describe("PUT",()=>{

    it("Alter a register with valid data", ()=>{

        requests.postRequest(postBody)
            .then((responsePost)=>{
                
                responses.valResponseValidPost(responsePost,postBody)
                
                const id = responsePost.body.id

                requests.putRequest(putBody,id)
                    .then((responsePut)=>{
                        responses.valResponseValidPut(responsePut,responsePost,putBody)  
            })
        })  
    })
})