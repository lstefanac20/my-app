import React from 'react';
import logo from  '../images/Logo .svg'

function Footer(){
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='' />
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Log in</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Adress:<br/> <strong>123 Towncity, USA</strong></li>
                        <li>Phone:<br/><strong>+0123 5544 3121</strong></li>
                        <li>Email:<br/><strong>littlemon@gmail.com</strong></li>
                    </ul>
                </div>
                <div>
                    <h3>Soicial Media Links</h3>
                    <ul>
                    <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
            <p>&copy; 2024 My app. All rights reserved</p>
        </footer>
    );
}

export default Footer;