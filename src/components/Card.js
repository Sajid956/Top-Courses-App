import { useState } from "react"
import {FcLikePlaceholder, FcLike} from 'react-icons/fc';
import { toast } from "react-toastify";

export const Card = ({courseContent, likedCourses, setLikedCourses}) => {

  const [readmore, setReadmore] = useState(false);
  const description = readmore ? courseContent.description : `${courseContent.description.substring(0, 100)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  function likeHandler () {
    if(likedCourses.includes(courseContent.id)) {
      //phle se like hua pada hai
      setLikedCourses( prev => prev.filter(cid => cid !== courseContent.id));
      toast.warning("Liked Removed");
    }
    else {
      // like krna hai
      if(likedCourses.length === 0) {
        setLikedCourses([courseContent.id]);
      }
      else{
        setLikedCourses(prev => [...prev, courseContent.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  
  return (
    <div className='relative w-[300px] bg-bg-dark bg-opacity-80 rounded-md overflow-hidden'>
        <img src= {courseContent.image.url} alt={courseContent.image.alt} className='w-full min-h-[168px] object-cover'/>

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 top-[8.8rem] shadow-xl grid place-items-center hover:cursor-pointer" onClick={() => {likeHandler()}}>
          {
            likedCourses.includes(courseContent.id) ?  <FcLike className="text-[1.7rem]"/> : <FcLikePlaceholder className="text-[1.7rem]"/>
          }
          
        </div>

        <h2 className='text-white font-semibold text-lg leading-6 p-4'>{courseContent.title}</h2>

        <p className='text-white text-base -mt-2 p-4 text-justify'>{description} 
        <span onClick={readmoreHandler} className="text-blue-300 cursor-pointer hover:text-blue-400">{readmore ? 'Show Less' : 'Read More'}</span>
        </p>
    </div>
  )
}
