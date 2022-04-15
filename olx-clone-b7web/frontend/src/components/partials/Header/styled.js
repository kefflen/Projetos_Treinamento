import styled from 'styled-components'

export const HeaderArea = styled.header`
  height: 60px;
  border-bottom: 1px solid #ccc;

  a {
    text-decoration: none;
  }
  
  .container {
    max-width: 1000px; 
    margin: auto;
    display: flex;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    span {
      font-size: 27px;
      font-weight: bold;
    }
    
    .logo1 { color: #FF0000}
    .logo2 { color: #00FF00}
    .logo3 { color: #0000FF}
  }

  nav {
    padding: 10px 0px;

    ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }

    li {
      margin-left: 20px;

      a {
        color: #000;
        font-size: 14px;
        text-decoration: none;

        &:hover {
          color: #999
        }

        &.buton {
          background-color: #FF8100;
          border-radius: 4px;
          color: #FFF;
          padding: 5px 10px;
        }

        &.button:hover {
          background-color: #E57706;
        }
        
      }
    }

  }



`