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