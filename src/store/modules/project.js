import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

export const project = {
    state:{
    project_info:
    {
      name:'',
      description:'',
      status:''
    }
     //console.log('setters')


    },
    getters:
    {
     //console.log('getters');

    getProjectInfo(state)
    {
      return state.project_info
    }

    },
    actions:
    {
      addProject(context,formData)
        {
          return new Promise((resolve,reject)=>
          {
            axios.post('/projects',formData)
            .then((response)=>{
               // console.log(response.data)
                context.commit('setProjectInfo',response.data)
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },

        getProjects()
        {
   
          return new Promise((resolve,reject)=>
          {
            axios.get('/projects')
            .then((response)=>{
               // console.log(response.data)
               // context.commit('setProjectInfo',response.data.data)
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },
          editProject(context,id)
        {
   
          return new Promise((resolve,reject)=>
          {
            axios.get('/projects/'+id)
            .then((response)=>{
             // console.log('hithrdthrtr')
               //console.log(response.data.data)
               // context.commit('setProjectInfo',response.data.data)
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },
        updateProject(context,formData)
        {
         // id = formData.id
         // console.log(formData);
          return new Promise((resolve,reject)=>
          {
               console.log(formData.users_id)

            axios.put('/projects/'+formData.id,formData)
            .then((response)=>{
             // console.log('hithrdthrtr')
               //console.log(response.data.data)
               // context.commit('setProjectInfo',response.data.data)
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },
        deleteProject(context,id)
        {
         // id = formData.id
         // console.log(formData);
          return new Promise((resolve,reject)=>
          {
              // console.log(formData.users_id)

            axios.delete('/projects/'+id)
            .then((response)=>{
             // console.log('hithrdthrtr')
               //console.log(response.data.data)
               // context.commit('setProjectInfo',response.data.data)
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },
        getUsers()
        {
        // axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.auth_token;
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
          return new Promise((resolve,reject)=>
          {
            axios.get('/users')
            .then((response)=>{
                //console.log(response.data)
               // context.commit('setProjectInfo',response.data.project)
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },
        getGroups()
        {
        // axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.auth_token;
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
          return new Promise((resolve,reject)=>
          {
            axios.get('/groups')
            .then((response)=>{
                //console.log(response.data)
               // context.commit('setProjectInfo',response.data.project)
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },
      //   getProject(context,id)
      //   {
      //   axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.auth_token;
      //   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      //     return new Promise((resolve,reject)=>
      //     {
      //       console.log(id);
      //       // axios.get('/groups')
      //       // .then((response)=>{
      //       //     //console.log(response.data)
      //       //    // context.commit('setProjectInfo',response.data.project)
      //       //     resolve(response)
       
      //       // })
      //       // .catch((error)=>{
      //       //     //console.log(error.response.data)

      //       //     reject(error)
      //       // })
      //     })
      // }
   
    },
    mutations:
    {

       setAuthToken(state,token)
       {
        state.auth_token = token;
       },
       setProjectInfo(state,project)
       {
        state.project_info.name = project.name;
        state.project_info.description = project.description;
        state.project_info.status = project.status

    }
    }
}