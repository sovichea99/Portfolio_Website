import React from 'react'

const ProfileSection = () => {
  return (
    <section
      id="profile"
      className="py-16 md:px-20  dark:bg-black"
    >
      <div className="max-w-7xl mx-auto justify-start items-start">
        <div className="relative overflow-hidden ">
          
          {/* Floated image on all screen sizes, smaller on mobile */}
          <div className="float-left ml-[20px] mr-3 mb-2 w-[100px] h-[100px] md:w-[150px] md:h-[150px] ">
            <img
              src="/images/sovichea.jpg"
              alt="Suoy Sovichea"
              className="rounded-2xl object-cover shadow-lg w-full h-full"
            />
          </div>

          {/* Text wraps around image */}
          <div className="text-gray-800 dark:text-white text-justify px-5">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-bold ">Personal Summary</h2>
            <p className="lg:text-lg md:text-lg text-sm mb-4 leading-relaxed">
              I’m a recent graduate in <strong>Computer Science</strong> from the Royal University of Phnom Penh (RUPP).
              I'm passionate about building real-world web and mobile applications using modern technologies such as <strong>React</strong>, <strong>Flutter</strong>, <strong>Laravel</strong>, and <strong>MongoDB</strong>.
            </p>

            <div className="space-y-1">
              <p><span className="font-semibold ">Location:</span> Toul Kork, Phnom Penh</p>
              <p><span className="font-semibold">Degree:</span> Bachelor of Computer Science</p>
              <p><span className="font-semibold">Interests:</span> Web & App Development, UI/UX Design</p>
              <p><span className="font-semibold">Email:</span> <a href="mailto:sovicheasuoy99@gmail.com" className="text-blue-600 dark:text-blue-400">sovicheasuoy99@gmail.com</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProfileSection;
