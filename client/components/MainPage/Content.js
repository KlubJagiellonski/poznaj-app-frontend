import React from 'react';
import {Grid, Header} from 'semantic-ui-react';


const {Column} = Grid;


export default function Content() {
    return (
        <Grid>
            <Column width={16} textAlign="center">
                <Header as="h1">PoznajApp</Header>
                <Header as="h2">Wrocław</Header>
            </Column>
            <Column mobile={16} computer={8}>
                Option 1
            </Column>
            <Column mobile={16} computer={8}>
                Option 2
            </Column>
        </Grid>
    );
}
