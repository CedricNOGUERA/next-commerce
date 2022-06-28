import React from 'react'
import { Container } from 'react-bootstrap'


type Props = {
    titleArticle: string;
    bodyArticle: string;
}

const Article = ({titleArticle, bodyArticle}: Props) => {
    return (
        <Container>
            <h1 className='py-5'>{titleArticle}</h1>
            <p>{bodyArticle}</p>
        </Container>
    )
}

export default Article
