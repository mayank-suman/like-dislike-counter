import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LikeButton from "./components/like_btn_cmp";
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import yellow from '@material-ui/core/colors/yellow';

const styles = theme => ({
  card: {
    minWidth: 275,
    width: 500,
    /* minHeight: 300, */
    margin: '100px auto'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  disLikeBtn: {
    float: 'right'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likeCount: 0,
      disLikeCount: 0,
      clickedBtn: ''
    }
  }

  handleLikeCounter(newCount) {
    this.setState({ clickedBtn: 'like', likeCount: newCount });
  }

  handleDisLikeCounter(newCount) {
    this.setState({
      clickedBtn: 'dislike',
      likeCount: this.state.likeCount > 0 ? this.state.likeCount - 1 : 0,
      disLikeCount: newCount
    });
  }

  checkStar() { return this.state.likeCount >= 100 && this.state.disLikeCount >= 50 }

  setStar() {
    this.setState({
      likeCount: 100,
      disLikeCount: 50
    })
  }

  render() {
    const { likeCount, disLikeCount, clickedBtn } = this.state;
    const showStarClass = this.checkStar() ? 'star show animated bounceIn' : 'star';

    const { classes } = this.props;
    return (
      <div className="App">

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">Like Dislike App</Typography>
          </CardContent>
          <CardActions>
            <LikeButton type='like' counter={likeCount} onCountChange={this.handleLikeCounter.bind(this)} clicked={clickedBtn === 'like'} />
            <LikeButton type='dislike' counter={disLikeCount} onCountChange={this.handleDisLikeCounter.bind(this)} clicked={clickedBtn === 'dislike'} className={classes.disLikeBtn} />
            <Icon className={showStarClass} >star</Icon>
          </CardActions>
        </Card>
        <Tooltip title="Set Star Condition (Like = 100, Dislike = 50)" aria-label="Add">
          <Fab color="secondary" aria-label="Edit" variant="extended" className={classes.fab} onClick={this.setStar.bind(this)} >
            {/* <Icon>edit_icon</Icon> */}
            Set Star
          </Fab>
        </Tooltip>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);