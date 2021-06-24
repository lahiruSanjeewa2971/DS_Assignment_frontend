import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share'
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function SingleService_({ post }) {
  const classes = useStyles();

  return (
    <div>
      <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={post.servicename}
        subheader={post.price}
      />

      <CardContent>
        <img
            style={{
            width: "250px",
            height: "180px",
            }}
            src={post.imgurl}
            alt=""
          />
        
        
      </CardContent>
      <CardActions>
        <Button href='/login' size="small">Buy item</Button>
          { <button onClick={() => setId(post._id)} className="btn btn-outline-primary">
              Buy
          </button> }
          <Link to={'details/${serviceid}'} onClick={() => setId(post.serviceid)}>
              <li className="btn btn-info">BUY New</li>
          </Link>
      </CardActions>
    </Card>
    </div>

    
    /*<div
      className="col-md-8  shadow p3 mb-5 bg-white rounded"
      style={{
        textAlign: "center",
        marginTop: "20px",
        width: '70%',
        justifyContent: 'space-around',
        flexWrap:'wrap'}}>

      <div style={{
          minWidth:'300px',
          minHeight:'400px',
          border: '1px solid #eee',
          overflow: 'hidden',
          padding: '10px',
          boxshadow: '2px 8px 20px #ddd',
          margin: '10px',
          transition: '0.5s linear',
      }}>
        <h2>{post.servicename}</h2>
        <img
            style={{
            width: "600px",
            height: "450px",
            }}
            src={post.imgurl}
            alt=""
          />
        <h2>{post.category}</h2>
        <h2>Price : {post.price}.00</h2>

        <Link to="/login">
            <li className="btn btn-info">BUY</li>
        </Link>
      </div>
    </div>*/
  );
}
export default SingleService_;
