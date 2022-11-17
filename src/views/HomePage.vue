    <template>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">Dashboard</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">

                    <!-- /.row -->
                    <!-- Main row -->
                    <div class="row">
                        <!-- Left col -->
                        <section class="col-lg-7 connectedSortable">

                            <!--/.direct-chat -->

                            <!-- TO DO List -->
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        <i class="ion ion-clipboard mr-1"></i>
                                        To Do List
                                    </h3>

                                    <router-link :to="{name:'AddProject'}" class="btn btn-info float-right"><i class="fas fa-plus"></i> Add item</router-link>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                   <table id="myTable" class="table table-bordered table-hover">
                                    <thead>
                                      <th>Id</th>
                                      <th>Name</th>
                                      <th>Assigned</th>
                                      <th>Description</th>
                                      <th>Status</th>
                                      <th>Actions</th>
                                  </thead>
                                  <tbody>
                                    <tr v-for="project in projects" :key="project.id">
                                        <td>{{project.id}}</td>
                                        <td>{{project.name}}</td>
                                        <td>{{project.members.toString()}}</td>
                                        <td>{{project.description}}</td>
                                        <td>{{project.status_text}}</td>
                                        <td>
                                            <router-link :to="{name:'EditProject',params:{id:project.id}}" class="btn btn-info" >Edit</router-link>
                                            <button type="button" class="btn btn-danger" @click="deleteProject(project.id)">Delete</button>
                                       </td>


                                    </tr>
                                  </tbody>

                              </table>
                          </div>
                          <!-- /.card-body -->
                          <div class="card-footer clearfix">

                          </div>
                      </div>
                      <!-- /.card -->
                  </section>
                  <!-- /.Left col -->
                  <!-- right col (We are only adding the ID to make the widgets sortable)-->

                  <!-- right col -->
              </div>
              <!-- /.row (main row) -->
          </div><!-- /.container-fluid -->
      </section>
      <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->


  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
</aside>
<!-- /.control-sidebar -->
</template>
<script type="text/javascript">
export default {
  data()
  {
    return {
        projects:[]
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {

       this.$store.dispatch('getProjects')
          .then((response)=>{
            this.projects = response.data.data
                  //  console.log(response.data)

        })
        .catch(() => console.log());

        },
        deleteProject(id) {
        // let id = id
         this.$store.dispatch('deleteProject',id)
       //this.$router.push({name:'Home'}) 

          .then(()=>{
           //this.projects.splice()
           //console.log(response.data.message)
             let i = this.projects.map(project=>project.id).indexOf(id)
             this.projects.splice(i,1)
           //this.$router.push({name:'Home'}) 

          // this.projects = response.data.data
                  // console.log(response.data)

        })
        .catch(() => console.log());

        }


    },




  }

</script>