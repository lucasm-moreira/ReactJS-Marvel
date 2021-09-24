import React from 'react';
import { Container } from 'semantic-ui-react';
import { FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <footer>
                <Container className="text-center">
                    <a className="github" href="https://github.com/lucasm-moreira">
                        <FaGithub className="icon-github" />
                    </a>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;