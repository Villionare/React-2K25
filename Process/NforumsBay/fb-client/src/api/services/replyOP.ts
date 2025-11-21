import server from "../config";

interface Props {
    username: string,
    textContent: string,
    media: string,
    to: string,
    thread_id: string
}

const replyToOP = async (props: Props) => {
    const responce = await server.post(`boards/:slug/threads/${props.thread_id}/replytoop`, {
        username: props.username,
        textContent: props.textContent,
        media: props.media,
        to: props.to
    });

    return responce;
};

export default replyToOP;