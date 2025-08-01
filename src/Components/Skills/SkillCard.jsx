import React from 'react'

function SkillCard() {
    const skillinfo = [
        {
            title: "JavaScript",
            imgurl: "https://quiksite.com/wp-content/uploads/2016/09/Javascript-Square.png",
        },
        {
            title: "HTML",
            imgurl: "https://clipground.com/images/html-logo-png-3.png",
        },
        {
            title: "CSS",
            imgurl: "https://logospng.org/download/css-3/logo-css-3-1024.png",
        },
        {
            title: "Tailwind",
            imgurl: "https://img.icons8.com/fluency/452/tailwind_css.png",
        },
        {
            title: "Bootstrap",
            imgurl: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
          title: "Vite",
          imgurl: "https://raw.githubusercontent.com/github/explore/a1bae1b15fa9fc4d5de64f3360b1d01b35db82d5/topics/vite/vite.png",
        },
        {
          title: "React",
          imgurl: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
        },
        {
          title: "Vercel",
          imgurl: "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1681948803/marketplaces/ckhg56iu1mkpc0b66vj7fsj3o/listings/orig_ncxzmp.png",
        },
        {
            title: "C",
            imgurl: "https://www.pngkit.com/png/full/101-1010012_c-programming-icon-c-programming-language-logo.png",
        },
        {
            title: "C++",
            imgurl: "https://user-images.githubusercontent.com/54292953/142726987-139b4a51-9471-4aa3-9051-1bab383c38c9.png",
        },
    ]
  return (
    <div>
      <div className='  flex flex-wrap justify-center items-center mt-8 bg-gray-800 gap-4 p-4 rounded-lg shadow-lg lg:w-11/12 md:w-10/12 sm:w-8/12'>
        {skillinfo.map((skill) => (
          <div key={skill.title} className='bg-gray-900 h-30 w-27 text-white rounded-lg p-4 m-2 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            
            <img src={skill.imgurl} alt={skill.title} className=' h-3/4  rounded-full' />
            <span >{skill.title}</span> 
            </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
