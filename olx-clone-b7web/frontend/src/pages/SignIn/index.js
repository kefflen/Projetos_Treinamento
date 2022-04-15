import { useState } from 'react'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents'
import { doLogin } from '../../helpers/AuthHandler'
import useApi from '../../helpers/useApi'
import { PageArea } from './styled'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRemenberPassword] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')

  const api = useApi()

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error &&
          <ErrorMessage>{error}</ErrorMessage>
        }

        <form onSubmit={async e => {
          e.preventDefault()
          setDisabled(true)

          const json = await api.login(email, password)

          if (json.error) {
            setError(json.error)
          } else {
            doLogin(json.token, rememberPassword)
            window.location.href = '/'
          }

          setDisabled(false)
        }}>
          <label className='area'>
            <div className='area--title'>Email</div>
            <div className='area--input'>
              <input type='email' required
                value={email} onChange={e => setEmail(e.target.value)} disabled={disabled}/>
            </div>
          </label>
          <label className='area'>
            <div className='area--title'>Password</div>
            <div className='area--input'>
              <input type='password' required
                value={password} onChange={e => setPassword(e.target.value)} disabled={disabled}/>
            </div>
          </label>
          <label className='area'>
            <div className='area--title'>Lembrar senha</div>
            <div className='area--input'>
              <input type='checkbox'
                value={rememberPassword} onChange={e => setRemenberPassword(e.target.value)} disabled={disabled}/>
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

