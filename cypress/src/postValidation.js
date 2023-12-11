export default{
    
    valResponseValidPost(response,postBody){

        const dataAtual = new Date().toISOString().slice(0,16)

        expect(response.status)
            .equal(200)
        expect(response.body.id).not.empty
        expect(response.body.createdAt).not.empty
        expect(response.body.createdAt.slice(0,16))
            .equal(dataAtual)
        expect(response.body.name)
            .equal(postBody.name)
    }
}