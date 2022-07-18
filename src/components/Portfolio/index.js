import React from "react";
import roses from "./roses.png"
import bestsite from "./bestsite.png"
import codequiz from "./codequiz.png"
import notetaker from "./notetaker.png"
import password from "./password.png"
import workday from "./workday.png"


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: roses,
            link: 'https://nicolesharrock.github.io/Roses-Are-Red/',
            repo: 'https://github.com/NicoleSharrock/Roses-Are-Red'
        },
        {
            id: 2,
            src: bestsite,
            link: 'https://hidden-tundra-81095.herokuapp.com/generate',
            repo: 'https://github.com/NicoleSharrock/Best-Site-No-Joke'
        },
        {
            id: 3,
            src: codequiz,
            link: 'https://nicolesharrock.github.io/code-quiz/',
            repo: 'https://github.com/NicoleSharrock/code-quiz'
        },
        {
            id: 4,
            src: notetaker,
            link: 'https://quiet-earth-95705.herokuapp.com/',
            repo: 'https://github.com/NicoleSharrock/note-taker'
        },
        {
            id: 5,
            src: password,
            link: 'https://nicolesharrock.github.io/password-generator/',
            repo: 'https://github.com/NicoleSharrock/password-generator'
        },
        {
            id: 6,
            src: workday,
            link: 'https://nicolesharrock.github.io/day-scheduler/',
            repo: 'https://github.com/NicoleSharrock/day-scheduler'
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, link, repo }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt="projects"
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link, '_blank')}>
                                    Site
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(repo, '_blank')}>
                                    GitHub
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;