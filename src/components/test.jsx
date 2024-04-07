import React from 'react'

function test() {
  return (
    <>
    <div>test</div>
    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    <div class="flex flex-shrink-0 items-center">
        <h2 class="text-purple-600 font-large">Yelp</h2>
    </div>
    <div class="hidden sm:ml-6 sm:block">
        <div class="relative flex" data-twe-input-wrapper-init="true" data-twe-input-group-ref="true">
            <input type="search" class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&amp;:not([data-twe-input-placeholder-active])]:placeholder:opacity-0" placeholder="Search" aria-label="Search" id="exampleFormControlInput" aria-describedby="basic-addon1" />
            <label for="exampleFormControlInput" class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">Search</label>
            <button class="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-red-accent-300 focus:shadow-primary-2 focus:outline focus:ring-100 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" type="button" id="button-addon1" data-twe-ripple-init="true" data-twe-ripple-color="light">
                <span class="[&amp;>svg]:h-5 [&amp;>svg]:w-5 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                    </svg>
                </span>
            </button>
        </div>
    </div>
</div>

    
    
    
    </>
    
  )
}

export default test