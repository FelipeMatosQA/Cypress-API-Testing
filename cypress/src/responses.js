export default{
    
    valResponseValidPost(response,postBody){

        const currentDate = new Date().toISOString().slice(0,16)

        expect(response.status)
            .equal(200)
        expect(response.body.id).not.empty
        expect(response.body.createdAt.slice(0,16))
            .equal(currentDate)
        expect(response.body.name)
            .equal(postBody.name)
    },

    valResponseValidGet(response,device_id){
        expect(response.status)
            .equal(200)
        expect(response.body.id)
            .equal(device_id)
        expect(response.body).not.empty
        expect(response.body.data).not.empty
        expect(response.body.data.year).not.string
        expect(response.body.data.price).not.string
        expect(response.body.data["CPU model"]).not.empty
    },

    valResponseValidDelete(responseDel,id){
        expect(responseDel.status)
            .equal(200)
        expect(responseDel.body.message)
            .equal(`Object with id = ${id} has been deleted.`)
    },

    valResponseInvalidDelete(responseDel,invalidId){
        expect(responseDel.status)
            .equal(404)
        expect(responseDel.body.error)
            .equal(`Object with id = ${invalidId} doesn't exist.`)

    },

    valResponseValidPut(responsePut,responsePost,putBody){

        const currentDate = new Date().toISOString().slice(0,16)

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
            .equal(currentDate)
    }
}