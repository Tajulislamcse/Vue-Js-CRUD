<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div>
          <router-link class="btn btn-info center" :to="{name:'Home'}">Project List</router-link>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->

     <form @submit.prevent="updateProject">
    <section class="content">
      <div class="container-fluid">
       
        <div class="row">
         
          <!-- left column -->
          <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Create Project</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
            <template v-for="(error,index) in errors" :key="index">
            <span  class="text-center text-danger mt-4">{{error[0]}}</span>
             </template>
                <div class="card-body">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model.lazy="formData.name" class="form-control" id="name" placeholder="Enter project name">
                  </div>
                          
                    
                      <!-- textarea -->
                      <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" v-model.lazy = "formData.description" rows="3" placeholder="Enter Project Description"></textarea>
                      </div>
                    

                  <div class="form-check">
                    <input type="checkbox" v-model="formData.status" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Status</label>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
               </div>
             </div>
            <!-- /.card -->

            <!-- Form Element sizes -->

            <!-- /.card -->



            <!-- /.card -->
        
            <!-- /.card -->

          <div class="col-md-6">
          <!-- /.card-header -->
              <div class="card-body">
                <h3>Assign To Groups</h3>
                <ul class="todo-list" data-widget="todo-list">
                  <li v-for="group in groups" :key="group.id">
                    <!-- drag handle -->
                    <span class="handle">
                      <i class="fas fa-ellipsis-v"></i>
                      <i class="fas fa-ellipsis-v"></i>
                    </span>
                    <!-- checkbox -->
                    <div  class="check-primary d-inline ml-2">
                      <input type="radio" v-model="formData.group_id" :value="group.id">
                      <label for="todoCheck1"></label>
                    </div>
                    <!-- todo text -->
                    <span class="text">{{group.name}}</span>
                    <!-- Emphasis label -->

                    <!-- General tools such as edit or delete-->

                  </li>
                </ul>
              <h3> Assign To Individual Person</h3>
                <ul class="todo-list" data-widget="todo-list">
                  <li v-for="user in users" :key="user.id">
                    <!-- drag handle -->
                    <span class="handle">
                      <i class="fas fa-ellipsis-v"></i>
                      <i class="fas fa-ellipsis-v"></i>
                    </span>
                    <!-- checkbox -->
                    <div  class="check-primary d-inline ml-2">
                      <input type="checkbox" v-model="formData.users_id" :value="user.id">
                      <label for="todoCheck1"></label>
                    </div>
                    <!-- todo text -->
                    <span class="text">{{user.name}}</span>
                    <!-- Emphasis label -->

                    <!-- General tools such as edit or delete-->

                  </li>
                </ul>
              </div>
         </div>
        
      
        </div>
      </div>
    </section>
    </form>
    <!-- /.content -->
  </div>
</template>
<script>
  export default {
    data()
    {
      return {
        formData: {
          id : this.$route.params.id,
          name :'',
          description:'',
          status:false,
          users_id:[],
          group_id:'',

        },
        errors:{},
        users:[],
        groups:[]
      }
    },
    created()
    {
       //console.log(this.formData.users_id); 
      //console.log(this.$route.params.id)
       this.$store.dispatch('editProject',this.$route.params.id)
      .then((response)=>{
       this.formData.name = response.data.data.name
       this.formData.description = response.data.data.description
       this.formData.status = response.data.data.status

      // console.log(this.formData)
      // console.log(this.groups)
       // this.$router.push({name:'Home'}) 
      })
      .catch(()=>{
                

             
      })


             
     
    },
    methods:
    {
      updateProject()
      {
         //console.log(this.formData); 
       this.$store.dispatch('updateProject',this.formData)
        .then((response)=>{
        console.log(response.data)
        this.$router.push({name:'Home'}) 
      })
      .catch((error)=>{
                 this.errors = error.response.data

             
      })

      
      }
    },
   mounted()
   {

      this.$store.dispatch('getGroups')
        .then((response)=>{
          this.groups = response.data.groups
       // console.log(this.groups)
       // this.$router.push({name:'Home'}) 
      })
      .catch(()=>{
                

             
      })

         //console.log(this.formData); 
       this.$store.dispatch('getUsers')
        .then((response)=>{
          this.users = response.data.data
       // console.log(response.data.data)
       // this.$router.push({name:'Home'}) 
      })
      .catch(()=>{
                 

             
      })


      
      
    }
  }
</script>