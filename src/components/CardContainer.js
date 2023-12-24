import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import { Spinner } from './Spinner';
import { toast } from 'react-toastify';

export const CardContainer = ({url, reqData}) => {

    const [course, setCourse] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect( () =>{
        
        const getResponse = async() => {
            setLoading(true);
            try {

                const response = await fetch(url);
                const data = await response.json();
    
                setCourse(data.data);
                
            } catch (error) {
                toast.error('Something went wrong');
            }
            setLoading(false);
        }

        getResponse();

    }, [url]);


    const getCourses = () => {
        let allCourses = [];

        if(reqData.id === '1') {
            Object.values(course).forEach( e => {
                e.forEach(element => {
                    allCourses.push(element);
                })
            })
            return allCourses;
        }
        else {
            return course[reqData.title];
        }

    }

    //for liked courses
    const [likedCourses, setLikedCourses] = useState([]);

  return (
    <div className='w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center gap-4 mb-4'>
        {
            loading ? (<Spinner/>) : (
                getCourses().map( (courseContent) => {
                    return <Card key={courseContent.id} courseContent={courseContent} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                })
            )
        }
    
    </div>
  )
}

