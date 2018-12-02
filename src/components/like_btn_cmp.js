import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    margin: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
    cssRoot: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    buttonBlue: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      },
});

class LikeButton extends Component {
    constructor(props) {
        super(props);
    }

    handleButtonClick() {
        //this.props.type === 'dislike' ? this.decreaseCounter() : this.increaseCounter();
        this.increaseCounter();
        console.log('clicked', this.props.counter);
    }

    increaseCounter() {
        this.props.onCountChange(this.props.counter + 1);
    }

    render() {
        const { counter, type, clicked, classes } = this.props;
        const selectedClass = clicked ? 'highlight-button-bg' : '';
        return (
            <Button
                onClick={this.handleButtonClick.bind(this)}
                variant="contained"
                color="primary"
                className={classNames(classes.margin, classes.cssRoot, {[classes.buttonBlue]: clicked})}
            >
                {type}
                <Icon className={classes.rightIcon}>thumb_up</Icon>
                <span className={classes.rightIcon}>{counter}</span>
            </Button>
        )
    }
}

LikeButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LikeButton);