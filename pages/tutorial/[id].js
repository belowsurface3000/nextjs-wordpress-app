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
                <Image src={tutorialPicture.mediaItemUrl} alt={tutorialPicture.altText} layout='fill' />}
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
  