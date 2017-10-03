import React from 'react';
import {Container, Header, Button} from 'semantic-ui-react';


export default class App extends React.Component {
    render() {
        return (
            <Container textAlign="center">
                <Header as="h1" style={{marginTop: 25}}>
                    PoznajApp
                </Header>
                <Button>
                    Poznaj
                </Button>
            </Container>
        );
    }
}
