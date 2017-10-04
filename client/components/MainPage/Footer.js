import React from 'react';
import {Grid} from 'semantic-ui-react';


const {Column} = Grid;


export default class Footer extends React.Component {
    render () {
        return (
            <Grid>
                <Column mobile={16} computer={8}>
                    Footer 1
                </Column>
                <Column mobile={16} computer={8}>
                    Footer 2
                </Column>
            </Grid>
        );
    }
}
