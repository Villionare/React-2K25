interface Props {
    username: string,
    textContent: string,
    media: string,
    to: string,
    reply_id: string
}

const replyToReply = (props: Props) => {
    console.log("reply made to the reply");
    console.log(props.textContent);
    console.log(props.reply_id);
};

export default replyToReply;