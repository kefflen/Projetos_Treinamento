import { Link } from "react-router-dom";
import { isLogged } from "../../../helpers/AuthHandler";
import { HeaderArea } from "./styled";

export default function Header() {
  let logged = isLogged()
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to={'/'}>
            <span className="logo1">O</span>
            <span className="logo2">L</span>
            <span className="logo3">X</span>
          </Link>
        </div>
        <nav>
          <ul>
            {logged ?
              (
                <>
                  <li>
                    <Link to={'/signin'} >Minha Conta</Link>
                  </li>
                  <li>
                    <Link to={'/signin'} >Sair</Link>
                  </li>
                  <li>
                    <Link to={''} className='button' >Poste um anuncio</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={'/signin'} >Login</Link>
                  </li>
                  <li>
                    <Link to={'/signup'} >Cadastrar</Link>
                  </li>
                </>
              )
            }
          </ul>
        </nav>
      </div>
    </HeaderArea>
  )
}
