import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { TbBrandTwitter } from 'react-icons/tb'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="LinkedIn"><BsLinkedin /></a>
            <a href="https://github.com" target="Github"><FaGithub /></a>
            <a href="https://twitter.com" target="Twitter"><TbBrandTwitter /></a>
        </div>
    )
}

export default HeaderSocials