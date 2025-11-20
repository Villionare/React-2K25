interface Props {
    username: string,
    textContent: string,
    media: string,
    to: string,
}

const replyToReply = (props: Props) => {
    // console.log("reply made to the reply");
    // console.log(props.textContent);
    console.log("we are getting reply doc id: ", props.to);
};

export default replyToReply;