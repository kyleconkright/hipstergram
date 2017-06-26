import * as moment from 'moment';

export class Post {
    id: string;
    username: string;
    createdAt: string;

    public fromApi(data) {
        let post = new Post;
        post.id = data._id;
        post.username = data.username;
        post.createdAt = moment(data.createdAt).fromNow();
        return post;
    }
}