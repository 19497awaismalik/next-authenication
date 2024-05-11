import nextAuth from 'next-auth'
import  github from 'next-auth/providers/github'
import  google from 'next-auth/providers/google'
export const option={
    providers:[
        github({
            clientId:process.env.NEXT_GITHUB_CLIENT_ID,
            clientSecret:process.env.NEXT_GITHUB_CLIENT_SECRET
        }),
        google({
            clientId:process.env.NEXT_GOOGLE_CLIENT_ID,
            clientSecret:process.env.NEXT_GOOGLE_CLIENT_SECRET
        })
    ]
}



export default nextAuth(option)