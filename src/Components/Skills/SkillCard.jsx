import React from "react";

function SkillCard() {
  const skillinfo = [
    { title: "JavaScript", imgurl: "https://quiksite.com/wp-content/uploads/2016/09/Javascript-Square.png" },
    { title: "HTML", imgurl: "https://clipground.com/images/html-logo-png-3.png" },
    { title: "CSS", imgurl: "https://logospng.org/download/css-3/logo-css-3-1024.png" },
    { title: "Tailwind", imgurl: "https://img.icons8.com/fluency/452/tailwind_css.png" },
    { title: "Bootstrap", imgurl: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" },
    { title: "Vite", imgurl: "https://raw.githubusercontent.com/github/explore/a1bae1b15fa9fc4d5de64f3360b1d01b35db82d5/topics/vite/vite.png" },
    { title: "React", imgurl: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png" },
    { title: "Vercel", imgurl: "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1681948803/marketplaces/ckhg56iu1mkpc0b66vj7fsj3o/listings/orig_ncxzmp.png" },
    { title: "C", imgurl: "https://www.pngkit.com/png/full/101-1010012_c-programming-icon-c-programming-language-logo.png" },
    { title: "C++", imgurl: "https://user-images.githubusercontent.com/54292953/142726987-139b4a51-9471-4aa3-9051-1bab383c38c9.png" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {skillinfo.map((skill) => (
        <div
          key={skill.title}
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 
          flex flex-col items-center justify-center gap-2 
          bg-gray-800/60 backdrop-blur-md rounded-xl shadow-md 
          hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={skill.imgurl}
            alt={skill.title}
            className="w-12 h-12 object-contain"
          />
          <span className="text-sm md:text-base font-medium text-gray-200">
            {skill.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SkillCard;
