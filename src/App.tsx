import React, { useState } from "react";
import Htag from "./components/Htag/Htag";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";
import Tag from "./components/Tag/Tag";
import Rating from "./components/Rating/Rating";
import Layout from "./layout/Layout";
import axios from "axios";

const App = () => {
    const [rating, setRating] = useState(3);

    return (
        <Layout>
            <Htag tag="h1">text</Htag>
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
        </Layout>
    );
};

export default App;

export const getData = async () => {
    // const firstCategory = 0
    try{
        const {data} = await axios.post('http://courses-top.ru/api/top-page/find')
        console.log(data)

    } catch (a) {
        console.error(a)
    }


}
