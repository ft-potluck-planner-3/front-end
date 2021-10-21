import React from "react";
import imgGit from '../images/gitHub-logo.png'
import logo from '../images/logo.png'

const imgGit1 = <img src={imgGit} alt="github" height = '21px' width = '38px' border-radius= '1rem' />
const logoIm = <img src={logo} alt="github" height = '50px' width = 'auto' />
const Footer =() =>{
    return (
        <footer>
        
            <hr/>
           <h2 className='footerHeader'>Connect With Us On The Socials</h2>
           <div style ={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: 50, gap: "30%"}}
           className='footer_container' >
           <div className="frondEnd">
                <h3>Front End:</h3>
                    <p className="gitHub">
                      <h4>Waylon Turbes </h4>
                        <a href='https://github.com/DoctorWayWay'>{imgGit1}</a>
                    </p> 
                    <p className="gitHub">
                        <h4>Jim Lemoine </h4> 
                        <a href='https://github.com/jimlemoine'>{imgGit1}</a>
                    </p>   
                        <p className="gitHub">
                        <h4>Kseniya Platonava</h4>
                        <a href='https://github.com/Kseniyapl'>{imgGit1}</a>
                    </p>  
            </div>
            <div className="backEnd">
                <h3>Back End:</h3>
                <p className="gitHub">
                        <h4>Allison Homem</h4>
                        <a href='https://github.com/allisonhomem'>{imgGit1}</a>
                    </p>  
                   
            </div>
           
        
            <div className="copyright">
                <div className="source">
                <h3>Source: </h3>
                <p><a href='https://github.com/ft-potluck-planner-3'>{logoIm}</a></p>
                </div>
            <p>Copyright 2021</p>
            </div>
        </div>
    </footer>
    )}
    export default Footer;