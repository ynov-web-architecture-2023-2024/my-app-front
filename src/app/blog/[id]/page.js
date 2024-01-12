"use client";
import { useParams } from 'next/navigation';

const Page = () => {
    const params = useParams()
    return (
        <div>
            <h1>Title</h1>
            <p>Description</p>
            <span>Date</span>
        </div>
    );
}

export default Page;