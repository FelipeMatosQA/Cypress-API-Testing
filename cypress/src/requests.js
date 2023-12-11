export default{

    postRequest(body){
        return cy.request({
                    method: "POST",
                    url: '/objects',
                    failOnStatusCode:false,
                    body: body
            }).then((response)=> {return response})
    },

    putRequest(body,id){
        return cy.request({
                    method: "PUT",
                    url: `objects/${id}`,
                    body: body
            }).then((response)=> {return response})
    },
    
    getRequest(id){
        return cy.request({
                    method: "GET",
                    url: `/objects/${id}`,
                    failOnStatusCode:false
            }).then((response)=> {return response})
    },
    
    deleteRequest(id){
        return cy.request({
                method: "DELETE",
                url: `/objects/${id}`
            }).then((response)=> {return response})
    }
}