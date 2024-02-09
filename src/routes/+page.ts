import {MarkDownLoader} from "$lib/markDownLoader";


export const load = async () => {
    const loader = new MarkDownLoader();
    //
    return {
        postCount: loader.loadPosts().length,
        posts: loader.loadPosts()
    }

};
