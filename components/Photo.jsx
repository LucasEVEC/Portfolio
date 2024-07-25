"use client";

const Photo = () => {
  return (
    <div className="flex justify-center items-center w-full h-full relative">
      <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden flex justify-center items-center relative">
        <img 
          src="/assets/profile-picture.jpg"
          alt="Photo de profil"
          className="object-cover w-full h-full absolute inset-0"
        />
      </div>
    </div>
  );
};

export default Photo;


