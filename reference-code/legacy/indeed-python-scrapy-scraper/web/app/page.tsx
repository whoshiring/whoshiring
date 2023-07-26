import Link from "next/link"

import {siteConfig} from "@/config/site"
import {buttonVariants} from "@/components/ui/button"
import FilteredSearch from "@/components/filtered-search";

export default function IndexPage() {
  return (
    <>
      <div className="py-10">
        <header className='hidden'>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 spacey-y-12">
            <div className="w-full bg-white border-2 border-black flex items-center shadow-[8px_8px_0px_0px_#E0FE1F]">
              <form className='grow px-8 py-9'></form>
              <div className='py-3 px-5 flex items-center justify-center'>
                <div
                  className="h-16 bg-neutral-dark-1 text-neutral-dark-12 w-full flex items-center justify-center py-4 px-8">Search
                </div>
              </div>
            </div>
            <FilteredSearch/>
          </div>
        </main>
      </div>

    </>
  )
}
