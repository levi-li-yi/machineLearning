export default {
  name:'12',
  namespace:'anonymous',
  image:'gcr.io/kubeflow-images-public/tensorflow-1.15.2-notebook-cpu:1.0.0',
  customImage:'',
  customImageCheck:false,
  cpu:'0.5',
  memory:'1.0Gi',
  gpus:{
    num:'none'
  },
  noWorkspace:false,
  workspace:{
    type:'Existing', // New
    name:'workspace-12',
    templatedName:'workspace-{notebook-name}',
    size:'10Gi',
    mode:'ReadWriteOnce',
    class:'{none}',
    extraFields:{}
    },
  datavols:[],
  shm:true,
  configurations:[]
}