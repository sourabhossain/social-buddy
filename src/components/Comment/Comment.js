import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '800px',
        margin: 'auto',

    },
    media: {
        height: '250px',
    },
});

const Comment = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [post, setPosts] = useState({});
    const { title, body } = post;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComments(data))

    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])



    return (

        <Card className={classes.root}>

            <CardActionArea>
                <CardMedia className={classes.media} image="https://i.ytimg.com/vi/JPT3bFIwJYA/maxresdefault.jpg" title="Contemplative Reptile"/>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <h1>{title}</h1>
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary" onClick={() => alert('Share feature Comming Soon !!!')}>Share</Button>
            </CardActions>
            
            <h2>Post Comments</h2>
            <hr />
            {
                comments.map(comment => <PostComment comment={comment}></PostComment>)
            }
        </Card>

    );
};

export default Comment;