import React from 'react'

const ProjectInfo = ({title, description, skills, imageUrl, liveUrl, codeUrl, startDate, endDate}) => {
  return (
    <div className="flex justify-center items-center flex-col px-4 py-6 md:py-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl text-gray-900 p-6 md:p-10 flex flex-col gap-6">
        <div className='w-full flex justify-between'>
          <p>From {startDate}</p>
          <p>To {endDate}</p>
        </div>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">{title}</h1>

        {/* Image */}
        
        <img src={imageUrl} alt={title} className="w-full max-h-96 object-cover rounded-xl shadow-md" />
        

        {/* Content */}
        <p className="text-gray-700 text-justify leading-relaxed text-md md:text-lg">
          {description}
        </p>

        

        {/* Back Button */}
        <div className="flex justify-start mt-6">
          <button
            className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo
