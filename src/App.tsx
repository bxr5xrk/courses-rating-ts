import React, { useState } from "react";
import Htag from "./components/Htag/Htag";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";
import Tag from "./components/Tag/Tag";
import Rating from "./components/Rating/Rating";

const App = () => {
    const [rating, setRating] = useState(3);

    return (
        <>
            <Htag tag="h1">hello world</Htag>
            <Button appearance="primary" onClick={() => console.log(11)}>
                button
            </Button>
            <Button appearance="ghost" arrow="right">
                button
            </Button>
            <Paragraph size="s">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci excepturi mollitia ex labore ducimus iure
                necessitatibus consequuntur illo fugiat. Ipsam, non rem
                doloremque a explicabo porro nulla veniam tenetur et?
            </Paragraph>
            <Tag size="s" color="primary">
                test
            </Tag>
            <Tag size="s" color="green">
                test
            </Tag>
            <Tag size="m" color="ghost">
                test
            </Tag>
            <Tag size="m" color="red">
                test
            </Tag>
            <Rating isEditable rating={rating} setRating={setRating} />
            <Rating rating={3} />
        </>
    );
};

export default App;
