import React from 'react'

const Search = () => {
    return (
        <main id='main' role='main'>
            <section className='EmptyState'>
                <div className='Container'>
                    <h1 className='EmptyState__Title Heading u-h5'>Search</h1>
                    <p>Enter a word to search our products:</p>
                    <div className='EmptyState__Action'>
                        <form method="GET" action="/search" className="Form">
                            <input className="Form__Input" type="text" name="q" autoComplete="off" autoCorrect="off" aria-label="Search..." placeholder="Search..." />
                            <input type="hidden" name="type" value="product" />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Search
