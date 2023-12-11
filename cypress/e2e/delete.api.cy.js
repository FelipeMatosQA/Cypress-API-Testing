const { expect } = require("chai")
const postBody = require("../fixtures/validPost.json")
import requests from "../src/requests"
import responses from "../src/responses"

describe("DELETE",()=>{

    it("Delete a register", ()=>{
        
        requests.postRequest(postBody)
            .then((response)=>{
                responses.valResponseValidPost(response,postBody)
                
                const id = response.body.id

                requests.deleteRequest(id)
                    .then((responseDel)=>{
                        responses.valResponseValidDelete(responseDel,id)
            })

        })
 
    })

    it("Delete a invalid register",()=>{
            
        const invalidId = 55555
        
        requests.deleteRequestFail(invalidId)
            .then((responseDel)=>{
                responses.valResponseInvalidDelete(responseDel,invalidId)
        })

    })
})