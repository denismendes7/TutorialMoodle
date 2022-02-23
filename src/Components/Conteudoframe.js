import React, { Component } from "react";
import Fade from "react-reveal";


class Conteudoframe extends Component {
    render() {
        return (
            <Fade>
                <section>
                    <div class="myIframe">
                            <iframe src="http://educacaoonline.unifametro.edu.br/mod/hvp/embed.php?id=226149" width="1418" height="833" 
                            frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                            <script src="http://educacaoonline.unifametro.edu.br/mod/hvp/library/js/h5p-resizer.js" charset="UTF-8"></script>
                    </div>
                </section>
            </Fade>
        );
    }
}
export default Conteudoframe;