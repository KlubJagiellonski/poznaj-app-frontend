import React from 'react';
import {Grid, Image} from 'semantic-ui-react';

import KlubJagiellonskiLogo from 'public/images/klub_jagiellonski_logo.png';
import KodujDlaPolskiLogo from 'public/images/koduj_dla_polski_logo.png';


const {Column} = Grid;


export default class Header extends React.Component {
    render () {
        return (
            <Grid>
                <Column textAlign="right">
                    <Image
                        as="a"
                        size="tiny"
                        href="http://google.com"
                        src={KlubJagiellonskiLogo}
                    />
                    <Image
                        as="a"
                        size="tiny"
                        href="http://google.com"
                        src={KodujDlaPolskiLogo}
                    />
                </Column>
            </Grid>
        );
    }
}
