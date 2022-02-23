import React, { Component } from "react";
import Fade, { Slide } from "react-reveal";


class Conteudo extends Component {
    render() {
        return (
            <Fade>

                <section id="resume">
                    <Slide left duration={1300}>
                        <div className="row skill">
                            <div className="three columns header-col">
                                <h1>
                                    <span>Conteúdo</span>
                                </h1>
                            </div>
                        </div>
                    </Slide>
                </section>

            </Fade>
        );
    }
}
export default Conteudo;