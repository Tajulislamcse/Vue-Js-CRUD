import {createRouter,createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage';
import AddProject from '../views/AddProject';
import EditProject from '../views/EditProject';
const router = createRouter({
    history:createWebHistory(),
    routes:[
      {
        path:'/',
        component:HomePage,
        name:'Home'
      },
     {
        path:'/add-project',
        component:AddProject,
        name:'AddProject'
      },
     {
        path:'/edit-project/:id',
        component:EditProject,
        name:'EditProject'
      }

        ]
})
export default router;