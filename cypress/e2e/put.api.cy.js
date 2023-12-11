const { expect } = require("chai")

const postBody = require("../fixtures/validPost.json")

const putBody = require("../fixtures/validPut.json")

import requests from "../src/requests"

describe("PUT",()=>{

    it.only("Alter a register with valid data", ()=>{

        const dataAtual = new Date().toISOString().slice(0,16)

        requests.postRequest(postBody)
            .then((responsePost)=>{
                expect(responsePost.status)
                    .equal(200)
                expect(responsePost.body.name)
                    .equal(postBody.name)
                const id = responsePost.body.id

                requests.putRequest(putBody,id)
                    .then((responsePut)=>{
                        expect(responsePut.status)
                            .equal(200)
                        expect(responsePut.body.id)
                            .equal(responsePost.body.id)
                        expect(responsePut.body.name)
                            .equal(putBody.name)
                        expect(responsePut.body.data.year)
                            .equal(putBody.data.year)
                        expect(responsePut.body.data.price)
                            .equal(putBody.data.price)
                        expect(responsePut.body.data["CPU model"])
                            .equal(putBody.data["CPU model"])
                        expect(responsePut.body.data["Hard disk size"])
                            .equal(putBody.data["Hard disk size"])
                        expect(responsePut.body.data.color)
                            .equal(putBody.data.color)
                        expect(responsePut.body.updatedAt.slice(0,16))
                            .equal(dataAtual)    
            })

        })
        
        

       
    })
})