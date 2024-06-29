import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  console.log("Context", context.params.id);

  return NextResponse.json(
    {
      msg: "success",
    }
  );
};

// using params to get id in easy way
// export const GET = async (req, {params}) => {
//     console.log("PARAMSID", params.id);

//     return NextResponse.json(
//       {
//         msg: "success",
//       }
//     );
//   };