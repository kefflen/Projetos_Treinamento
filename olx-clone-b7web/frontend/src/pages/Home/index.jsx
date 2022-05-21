import { PageContainer, PageTitle } from "../../components/MainComponents"
import UseApi from "../../helpers/UseApi"
import { PageArea } from "../SignUp/styled"
import { SearchArea } from "./styled"

export default function Home() {

  const api = UseApi()

  return (
    <>
      <SearchArea>
        <PageContainer>
          
        </PageContainer>
      </SearchArea>
        <PageContainer>
          <PageTitle>Login</PageTitle>
          <PageArea>

          </PageArea>
        </PageContainer>
    </>
  )
}

