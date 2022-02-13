# Next.js, GraphQL, Wordpress Project
heavily inspired by this repo: https://github.com/kellenmace/atlas-content-modeler-demo

a Next.js App, using Wordpress with GraphQL for the backend

## create the Wordpress backend
1. install Wordpress on a web server and follow the instruction to set it up
2. in the /wp-admin window, navigate to "Plugins"
3. install "Atlas Content Modeler" and "WP GraphQL"
4. click on "Content Modeler" in the side navigation
5. click "New Model"
6. singular name: "Tutorial"
7. plural name: "Tutorials"
8. set the API Visibility to "Public"
9. (optional) pick a Model Icon
10. "Create"
11. add the following fields to the model:
    - "Text": set Name to "Tutorial Title" and hit "Create"
    - click the plus symbol and select "Date" and set its Name to "Tutorial Date"
    - "Rich Text": set Name to "Tutorial Text"
    - "Media": set Name to "Tutorial Picture" and check "Set as featured image"
12. after creating the four fields, hit the big three-dot symbol at the top right and select "Open in GraphiQL"
13. now you can view the center area, with "Query Variables" at the bottom. this is the model structure, which needs to be added into the Next.js code later
14. the /wp-admin dashboard, click on the previous created "Tutorials" element in the sidenav
15. select "Add New" to create content
16. fill out all fields and upload an image, click on "Publish"
17. the Wordpress part is done, time to fire up VSCode and create the Next.js part

## Create the Next.js frontend
1. $ npx create-next-app
2. submit a project name
3. cd "project name"
6. clear all files of unnecessary code(optional)
7. npm i @apollo/client html-react-parser
8. put this code in "_app.js":
```
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apolloClient";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
```
9. inside the root folder of the project, add the directory "components"
10. inside "/components", add the file "Layout.js"
11. inside "Layout.js", add:
```
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.js, GraphQL, Wordpress Project</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
```
12. inside "/pages", add directory "tutorial"
13. inside "/tutorial", add file "[id].js" and there, add:
```
import { gql } from "@apollo/client";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../lib/apolloClient";
import Layout from "../../components/Layout";

const GET_TUTORIAL = gql`
    query getTutorial($databaseId: ID!) {
        tutorial(id: $databaseId, idType: DATABASE_ID) {
            tutorialTitle
            tutorialDate
            tutorialText
            tutorialPicture {
                mediaItemUrl
                altText
            }
        }
    }
`;

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function Tutorial({ tutorial }) {

    const {
        tutorialTitle,
        tutorialDate,
        tutorialText,
        tutorialPicture
    } = tutorial;

    return (
        <Layout>
            <Link href="/tutorials">
                <a>Back to tutorials</a>
            </Link>
            <div>
                <h1>{tutorialTitle}</h1>
                {tutorialPicture && 
                <Image src={tutorialPicture.mediaItemUrl} alt={tutorialPicture.altText} />}
            </div>
            <div>
                <h3>{formatDate(tutorialDate)}</h3>
                <p>{parse(tutorialText)}</p>
            </div>
        </Layout>
    );
}

export function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking",
    };
}

export async function getStaticProps(context) {
    
    const response = await client.query({
        query: GET_TUTORIAL,
        variables: {
            databaseId: context.params.id,
        }
    });

    const tutorial = response?.data?.tutorial;

    if (!tutorial) {
        return { notFound: true };
    }

    return {
        props: { tutorial },
        revalidate: 60,
    };
}
```
14. in the project root folder, create directory "lib" and inside, create "apolloClient.js"
15. inside "apolloClient.js", add:
```
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  cache: new InMemoryCache(),
});
```
16. inside the root folder, create file ".env.local"
17. type (switch "yourdomain" with your domain):
```
NEXT_PUBLIC_WORDPRESS_API_URL=https://yourdomain/graphql
```
18. in "/pages", create file "tutorials.js"
19. add:
```
import { gql } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/apolloClient";
import Layout from "../components/Layout";

const GET_TUTORIALS = gql`
    query getTutorials {
        tutorials(first: 10, after: null) {
            nodes {
                databaseId
                tutorialTitle
                tutorialDate
                tutorialPicture {
                    mediaItemUrl
                    altText
                }
            }
        }
    }
`;

export default function Tutorials(props) {
    const { tutorials } = props;

    return (
        <Layout>
            <h1>Tutorials</h1>
            {tutorials.map((tutorial) => (
                <div key={tutorial.databaseId}>
                    <h3>
                        <Link href={`tutorial/${tutorial.databaseId}`}>
                            <a>{tutorial.tutorialTitle}</a>
                        </Link>
                    </h3>
                    {tutorial.tutorialPicture && <Image src={tutorial.tutorialPicture.mediaItemUrl} alt={tutorial.tutorialPicture.altText} layout='fill'/>}
                </div>
            ))}
        </Layout>
    );
}

export async function getStaticProps() {
    const response = await client.query({
        query: GET_TUTORIALS,
    });
  
    return {
        props: {
            tutorials: response.data.tutorials.nodes,
        },
    };
}
```
20. in "next.config.js", add:
```
module.exports = {
    images: {
      domains: ['yourdomain'],
    },
}
```