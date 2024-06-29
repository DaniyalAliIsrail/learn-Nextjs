import { NextResponse } from "next/server";
import  cookies  from "next/headers";
export async function GET(req){
  
    //Header
    // const requestHeaders = new Headers(req.headers)
    // console.log(requestHeaders);

    // Url Query Params
    //Method:01

    // const {searchParams} = new URL(req.url);
    // console.log("Method01",searchParams);
    // console.log(searchParams.get("search")); 

    //Method:02

    // const searchParams1 = req.nextUrl.searchParams
    // console.log("method2",searchParams1);
    // console.log(searchParams1.get("search"));
   
    //Cookies

    // const cook1 = req.cookies
    // console.log(cook1);

    // const cook2 = cookies();
    // console.log("cookies2",cook2);
  
    return NextResponse.json({"msg": "Hello Nextjs Api"})
}



export async function POST(req){

    // const res = await req.json();
    // console.log("ResJSON",res);

    //FORMDATA
    const formData = await req.formData();
    // console.log("FormData",formData);

    //get singleValue
    console.log("formData",formData.get("email"));
    console.log("formData",formData.get("password"));

    return NextResponse.json({
        "msg": "Post Nextjs Api"
    },{status:201})

    
}






















