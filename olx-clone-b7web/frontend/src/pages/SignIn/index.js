import { PageContainer, PageTitle } from '../../components/MainComponents'
import { PageArea } from './styled'

export default function SignIn() {
  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        <form>
          <label className='area'>
            <div className='area--title'>Email</div>
            <div className='area--input'>
              <input type='email'/>
            </div>
          </label>
          <label className='area'>
            <div className='area--title'>Password</div>
            <div className='area--input'>
              <input type='password'/>
            </div>
          </label>
          <label className='area'>
            <div className='area--title'>Lembrar senha</div>
            <div className='area--input'>
              <input type='checkbox'/>
            </div>
          </label>
          <label className='area'>
            <div className='area--title'></div>
            <div className='area--input'>
              <button>Fazer login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}

