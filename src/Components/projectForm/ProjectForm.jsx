import React from 'react'
import authservice from '../../Appwrite/DatabaseAndStorage'   

const ProjectForm = () => {
    const [data, setData] = React.useState({
        title: "",
        description: "",
        image : null,
        startDate: new Date().toISOString().split('T')[0] ,
        endDate: new Date().toISOString().split('T')[0]
    });
    

    const submit = async (data) => {
      
    if (data) {
      
      let id = data.image;
      const file = await authservice.uploadFile(data.image);
      if (file) {
        authservice.deleteFile(data.image);
        id = file.$id
      }
      const dbPost = await authservice.updatePost(data.$id, { ...data, featuredImage: id });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }
    else {
      const file = await authservice.uploadFile(data.image[0]);
      if (file) {
        const dbPost = await authservice.createPost({ ...data, featuredImage: file.$id });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  }
  return (
    <div className='w-full min-h-screen text-white'>
      <form action="submit" className='w-full h-full'
      onSubmit={
       (e) => {
        e.preventDefault();
        console.log("data befor submit",data);
       
        submit(data);
       }
      }
      >
        <div>
        <p className='text-xl'>Project Title</p>
        <input type="text" placeholder='Enter title of the project' value={data.title} onChange={(e) => (setData({...data, title: e.target.value}))} 
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200"
         />
        </div>
        <div className='w-full flex flex-col px-10 gap-2'>
        <p className='text-xl text-left'>Project Description</p>
        <input type="text" placeholder='Enter the description of the project' value={data.description} onChange={(e) => (setData({...data, description: e.target.value}))} 
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200 min-h-40 flex items-start"
         />
        </div>
        <div className='w-full flex flex-col px-10 gap-2'>
        <p className='text-xl text-left'>Project Image</p>
        <input type="file" accept='image/*' onChange={(e) => (setData({...data, image: e.target.files[0]}))}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 w-1/3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200"
        />
        
        </div>
        <div className='w-full flex flex-col px-10 gap-2'>
        <p className='text-xl text-left'>Start Date</p>
        <input type="date" value={data.startDate} onChange={(e)=>(setData(...data,startDate = e.target.value))} 
        className="p-3 rounded-lg bg-gray-800 border border-gray-700 w-40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200"
        />
        </div>
        <div className='w-full flex flex-col px-10 gap-2'>
        <p className='text-xl w-full text-left'>End Date</p>
        <input type="date" value={data.endDate} onChange={(e)=>(setData(...data,endDate = e.target.value))} 
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 w-40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200"
        />
        </div>

        <button type='submit' className='px-4 py-2 bg-indigo-400'>
            Submit
        </button>
      </form>
    </div>
  )
}

export default ProjectForm
