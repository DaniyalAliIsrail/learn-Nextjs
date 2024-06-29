import { NextResponse } from "next/server";

export async function GET(req) {
    try {

        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const posts = await res.json();
        // console.log(posts);

        return NextResponse.json({
            "data": posts
        });

    } catch (error) {

        return NextResponse.json({
            "error": error.message
        }, { status: 500 });
    }

}
