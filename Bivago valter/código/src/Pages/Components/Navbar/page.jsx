import {Container, Navbar, ProfileContainer, Image, Title, Link, Links} from "./style.jsx"

import logo from "./Assets/svg.png"

export function Page (){
    return(
      <Container>
        <Navbar>
            <ProfileContainer>

                <Image src={logo}>
                </Image>

                <Title>
                    Bivago
                </Title>

            </ProfileContainer>
            
            <Links>
                <Link>
                    Início
                </Link>

                <Link>
                    Viagens
                </Link>

                <Link>
                    Login
                </Link>

                <Link>
                    Cadastrar
                </Link>
            </Links>

        </Navbar>
      </Container>
    )
}
