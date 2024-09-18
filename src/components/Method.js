import React from 'react'

function Method() {
    let dataOne = [
        { title: 'Meeting', desc: 'we define type , Target From the website Get To know your business more ' },
        { title: 'Structure', desc: 'Making sitemap + Wireframes of the website' },
    ]
    let DesignStep = { title: 'Design', desc: 'Delivering the final design of the Website' };

    let dataTwo = [
        { title: 'Development', desc: 'Developping the solution using modern techs' },
        { title: 'Deployment', desc: 'hosting the website in a server, domain name for the website' },

    ]
    return (
        <div>
            <h1 className='text-center'>How We Serve You ?</h1>
            <div className='flex flex-col'>
                {dataOne.map((e) => {
                    return (
                        <div className='' key={e.desc}>
                            <h2>{e.title} </h2>
                            <h4>{e.desc} </h4>
                        </div>
                    )
                })}
            </div>

            <div className=''>
                <h2>{DesignStep.title} </h2>
                <h4>{DesignStep.desc} </h4>
            </div>


            <div className='flex flex-col'>
                {dataTwo.map((e) => {
                    return (
                        <div className=''>
                            <h2>{e.title} </h2>
                            <h4>{e.desc} </h4>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Method
