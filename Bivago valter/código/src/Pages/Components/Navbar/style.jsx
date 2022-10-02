import styled from 'styled-components'

export const Container = styled.div`
    
    background-color: #282a36;
    display: flex;
    flex-direction: row;
    max-height: 100%;
    min-height: 100%;

    @media (min-widht: 600px) {
        #root{
            display: flex;
        }
        
    }

`;

export const Navbar = styled.div`
    max-width: 100%;
    min-height: 10%;
    display: flex;
    justify-content: space-between;
 
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem ;

`;

export const Image = styled.img`
    width: 10rem;
    height: 10rem;

`;

export const Title = styled.h2`
    color: white;
    font-size: 2rem;

`;

export const Links = styled.ul`
    color: white;
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;


`;

export const Link = styled.li`

`;