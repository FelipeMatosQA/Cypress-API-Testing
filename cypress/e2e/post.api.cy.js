const { expect } = require("chai")
const postBody = require("../fixtures/validPost.json")
import requests from "../src/requests"

describe("POST",()=>{

    it("Include a valid register", ()=>{

        const dataAtual = new Date().toISOString().slice(0,16)
 
        requests.postRequest(postBody)
            .then((response)=>{
                expect(response.status)
                    .equal(200)
                expect(response.body.id).not.empty
                expect(response.body.createdAt).not.empty
                expect(response.body.createdAt.slice(0,16))
                    .equal(dataAtual)
                expect(response.body.name)
                    .equal(postBody.name)
        })
            
    })
})