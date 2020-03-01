import React, { Component } from 'react';
import styled from "styled-components";
import Jumbotron from 'react-bootstrap/Jumbotron';

class JumbotronClass extends Component {
    render() {
        return (
            <JumbotronWrapper>
                <Jumbotron>
                    <div>
                        <h1>Welcome to Golden Shoe</h1>
                        <p>
                            The latest Designs from the World of Fashion
                        </p>
                    </div>
                </Jumbotron>
            </JumbotronWrapper>
        );
    }
}

const JumbotronWrapper = styled.div`
.jumbotron {
    background-image: url('img/jumbotronBackground.jpg');
    background-size: cover;
    background-position: center;
    min-height: 450px
    height: 100%;

    h1, p{
        text-align:center;
        color: #962242;
    }
    :not(p){
        font-size: 60px;
        letter-spacing: 5.5px;
    }
  }
`;

export default JumbotronClass;