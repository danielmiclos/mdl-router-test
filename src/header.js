import React, {Component} from 'react';
import {Grid, Cell, Badge, Icon} from 'react-mdl';

class HeaderApp extends Component {

    render() {
        return (

                <Grid shadow={1}>
                    <Cell col={10}><h3>This is a header</h3></Cell>
                    <Cell col={2}>
                        <Badge text="1" overlap>
                            <Icon name="account_box"/>
                        </Badge>
                    </Cell>
                </Grid>
        );
    }
}

export default HeaderApp;