import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/52329328?s=460&u=ce8fa0776e3a9d5b5f098359e5292a3285844166&v=4" alt="Lucas Carvalho" />
        <div>
          <strong>Lucas Carvalho</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Professor apaixonado pela história da humanidade.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non urna sed est lacinia cursus nec eget enim. Ut vitae mauris sed dolor sollicitudin condimentum vel ac eros.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;