"use client";
import {useEffect, useState} from "react";
import { useParams } from 'next/navigation';
import articlesService from "@/services/articles.api";

const Page = () => {
    const params = useParams()
    const [article, setArticle] = useState(null);

    useEffect(() => { 
        articlesService.getArticle(params.id).then(data => {
            setArticle(data);
        }).catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Title</h1>
            <p>Description</p>
            <span>Date</span>
        </div>
    );
}

export default Page;