import server from "../config";

interface Props {
    username: string,
    textContent: string,
    media: string,
    to: string,
    thread_id: string
}

const replyToReply = async (props: Props) => {
    const responce = await server.post(`boards/:slug/threads/${props.thread_id}/replytoreply`, {
        username: props.username,
        textContent: props.textContent,
        media: props.media,
        to: props.to
    });

    return responce;
};

export default replyToReply;