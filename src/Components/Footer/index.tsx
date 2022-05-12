import style from './style.module.scss';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.Copyright}><CopyrightIcon /> Nome da Empresa - 2022</p>
    </footer>
  )
}