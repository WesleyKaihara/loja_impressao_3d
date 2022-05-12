import style from './style.module.scss';

import { InputGroup, FormControl, Button, Dropdown } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

export default function SubMenu() {
  return (
    <section className={style.subMenu}>
      <div className={style.itens}>
        <div className={style.categorias}>
          <a href="#"><p className={style.categorias_item}>Chaveiros</p></a>
          <a href="#"><p className={style.categorias_item}>Acessórios para Celular</p></a>
          <a href="#"><p className={style.categorias_item}>Bustos</p></a>
        </div>


        <InputGroup className={`mb-3 ${style.subMenu_pesquisa}`}>
          <FormControl
            placeholder="Buscar item"
            aria-label="Buscar item"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <SearchIcon />
          </Button>
        </InputGroup>

      </div>

    </section>
  )
}