/// <reference types="cypress"/>
import requests from "../src/requests"

describe("GET",()=>{

    it("List one single device",()=>{

        const device_id = "7"
        
        requests.getRequest(device_id)
            .then((response)=>{
                expect(response.status)
                    .equal(200)
                expect(response.body.id)
                    .equal(device_id)
                expect(response.body).not.empty
                expect(response.body.data).not.empty
                expect(response.body.data.year).not.string
                expect(response.body.data.price).not.string
                expect(response.body.data["CPU model"]).not.empty
            })
    })
})