import React from "react";

import { logo } from "../assets";

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt='sumrize_ai_logo' className='w-28 object-contain' />

                <button
                    type='button'
                    onClick={() =>
                        window.open("https://github.com/axewhyzed/sumrize-ai", "_blank")
                    }
                    className='black_btn'
                >
                    GitHub link
                </button>
            </nav>

            <h1 className='head_text'>
                Summarize your Articles with <br className='max-md:hidden' />
                <span className='orange_gradient '>Sumrize AI</span>
            </h1>
            <h2 className='desc'>
                Sumrize AI, the AI Powered Article Summarizing App!
            </h2>
        </header>
    );
};

export default Hero;