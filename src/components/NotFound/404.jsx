import { useState } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <section className="flex items-center h-full p-16 dark:bg-gray-900 bg-gray-50 dark:text-gray-100 text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600 text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p className="mt-4 mb-8 dark:text-gray-400 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link rel="noopener noreferrer" to="./" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 bg-violet-600 dark:text-gray-900 text-gray-50">Back to homepage</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
