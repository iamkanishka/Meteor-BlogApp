import { Template } from 'meteor/templating';

import { BlogsCollection} from '../../../../imports/db/Blogs/blogs';

import './posts.html';
import './posts.css';

var quill

// Template.addblog.onRendered(function () {
//     // counter starts at 0

//     quill = new Quill('#editor', {
//         theme: 'snow',
//         modules :{
//             toolbar: [
//               ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
//               ['blockquote', 'code-block'],
          
//               [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//               [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//               [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
//               [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
//               [{ 'direction': 'rtl' }],                         // text direction
          
//               [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//               [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
//               [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//               [{ 'font': [] }],
//               [{ 'align': [] }],
          
//               ['clean'],                                         // remove formatting button
          
//               ['link', 'image', 'video']                         // link and image, video
//             ]
//           },
//         placeholder: 'Please Add the Image/Video first and Add the Content',
        
//         })

       
   
//   });


  Template.blogs.helpers({
    blogs(){
        var id=localStorage.getItem("id");
        if(id!=null){

        return BlogsCollection.find({userid:id},{sort: { createdAt: -1 }}).fetch();  
        }else{
            FlowRouter.go(`/`);
        }
    },
    

});



var update=false;
var id="";
// Template.addblog.events({
//     'click .add':function (event){
        
//         var blog  = quill.root.innerHTML;
        
//         console.log(blog)
//         console.log(quill.getContents())
//         console.log(quill.getText())


//         //alert(update+id);
//         if(!update){

//         Meteor.call('blog.add',{blog},(err,id)=>{
//             if(err){
//               alert(err);
//             }
//             else{
//                 quill.root.innerHTML="";
             
//             }
//         });
//        }
//        else{
//         Meteor.call('blog.update',{id,blog},(err,id)=>{
//             if(err){
//                alert(err);
//             }
//             else{
//                 quill.root.innerHTML="";
              
//                 update=false;
//                 id="";
//             }
//         });
//        }

//     },



// });

Template.userposts.events({
    'click .create': (event)=>{
        FlowRouter.go(`/CreatePost`);
    }



})







Template.blogs.events({



    'click .delete'() {
        Meteor.call('blog.remove', this._id);
      },
      'click .edit'() {
        // Meteor.call('blog.edit',this._id,(err,post)=>{
        //     if(err){
        //         alert(err);
        //     }
        //     else{
        //         quill.root.innerHTML=post.blog;
            
        //         id=post._id;
        //         update=true;
        //     }
        // });
     
    var bid=this._id



 FlowRouter.go(`/editPost/`+bid);
      },


})