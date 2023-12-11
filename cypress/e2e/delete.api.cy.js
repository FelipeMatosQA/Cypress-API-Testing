const { expect } = require("chai")
const postBody = require("../fixtures/validPost.json")
import requests from "../src/requests"

describe("DELETE",()=>{

    it("Delete a register", ()=>{
        
        requests.postRequest(postBody)
            .then((response)=>{
                expect(response.status)
                    .equal(200)
                const id = response.body.id

                requests.deleteRequest(id)
                    .then((responseDel)=>{
                        expect(responseDel.status)
                            .equal(200)
                        expect(responseDel.body.message)
                            .equal(`Object with id = ${id} has been deleted.`)
            })

        })
 
    })

    it("Delete a invalid register",()=>{
            
        const invalidId = 55555
        
        requests.deleteRequest(invalidId)
            .then((responseDel)=>{
                expect(responseDel.status)
                    .equal(404)
                expect(responseDel.body.error)
                    .equal(`Object with id = ${invalidId} doesn't exist.`)
        })

    })
})