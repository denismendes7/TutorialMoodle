import React, { Component } from "react";
import Fade, { Slide } from "react-reveal";


class Acompanhamento extends Component {
    render() {
        return (
            <Fade>

                <section id="resume">
                    <Slide left duration={1300}>
                        <div className="row skill">
                            <div className="three columns header-col">
                                <h1>
                                    <span>Acompanhamento</span>
                                </h1>
                            </div>
                        </div>
                    </Slide>
                </section>

            </Fade>
        );
    }
}
export default Acompanhamento;