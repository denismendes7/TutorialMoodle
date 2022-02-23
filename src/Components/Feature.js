import React, { Component } from "react";
import Fade from "react-reveal";

class Feature extends Component {
    render() {
        return (
            <Fade>
                <section id="feature">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-6">
                                <h2>Sobre o Moodle, podemos afirmar que</h2>
                                <p> <strong>A</strong>-- é um Ambiente Virtual de Aprendizagem (AVA) muito popular na área de educação,
                                    principalmente por ser apresentar um código aberto, passível de alteração pelos usuários.
                                </p>
                                <p> <strong>B</strong>-- é uma plataforma paga, por isso é o Ambiente Virtual de Aprendizagem (AVA) mais usado no mundo.
                                </p>
                                <p> <strong>C</strong>-- funciona como uma sala de aula presencial onde professores e alunos precisam estar no mesmo local e horário.
                                </p>
                                <p><strong>D</strong>-- a principal vantagem do Moodle é descentralizar todas as informações relativas à disciplina.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        );
    }
}
export default Feature;