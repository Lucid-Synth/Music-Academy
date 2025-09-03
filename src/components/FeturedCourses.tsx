'use client'
import CourseData from '../data/music_courses.json'

import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

function FeturedCourses() {
  const featuredCourses = CourseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
          <h1 className='text-base text-emerald-700 font-bold tracking-wide uppercase'>FEATURED COURSES</h1>
          <p className='text-3xl font-semibold tracking-normal'>Learn with the best</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {featuredCourses.map((course:Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient 
              className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  <Link href={`/courses/${course.slug}`}>
                  Learn more
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='mt-20 text-center'>
          <Link href={"/courses"} className='px-4 py-2 bg-amber-50 text-black border border-amber-100 rounded-md font-medium tracking-tight hover:bg-gray-200'>
          View All Courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeturedCourses